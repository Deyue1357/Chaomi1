#!/usr/bin/env python3
"""
超觅 Ultraseek 官网 — 阿里云 ECS 部署脚本（Python 版）

功能：
  1. 本地构建 dist（如未构建或 --build 强制）
  2. SFTP 上传 dist 到 /usr/share/nginx/html
  3. 上传 nginx.conf 到 /etc/nginx/conf.d/ultraseek.conf
  4. 禁用 Nginx 默认欢迎页 server（避免 80 端口冲突）
  5. nginx -t 测试 + 重启
  6. HTTP 验证

用法：
  python deploy_ecs.py [ECS_IP] [SSH_USER] [--build]
  默认：python deploy_ecs.py 8.160.170.230 root

前提：本机已配置 SSH 免密登录到 ECS（~/.ssh/id_ed25519）
"""
import os
import sys
import stat
import subprocess
import paramiko

# ---------- 配置 ----------
HERE = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(HERE)
DIST_DIR = os.path.join(PROJECT_ROOT, "dist")
NGINX_CONF = os.path.join(HERE, "nginx.conf")

REMOTE_WEB_DIR = "/usr/share/nginx/html"
REMOTE_CONF_DIR = "/etc/nginx/conf.d"
REMOTE_CONF_FILE = "ultraseek.conf"
SSH_KEY = os.path.expanduser("~/.ssh/id_ed25519")

GREEN = "\033[32m"
RED = "\033[31m"
YELLOW = "\033[33m"
RESET = "\033[0m"


def log(msg, color=GREEN):
    print(f"{color}==> {msg}{RESET}")


def err(msg):
    print(f"{RED}[错误] {msg}{RESET}")


# ---------- SFTP 递归上传 ----------
def sftp_makedirs(sftp, remote_dir):
    """递归创建远程目录（类似 mkdir -p）。"""
    parts = remote_dir.strip("/").split("/")
    cur = ""
    for p in parts:
        cur += "/" + p
        try:
            sftp.stat(cur)
        except IOError:
            sftp.mkdir(cur)


def upload_dir(sftp, local_dir, remote_dir):
    """递归上传本地目录到远程。"""
    sftp_makedirs(sftp, remote_dir)
    count = 0
    for item in os.listdir(local_dir):
        lp = os.path.join(local_dir, item)
        rp = remote_dir.rstrip("/") + "/" + item
        if os.path.isdir(lp):
            count += upload_dir(sftp, lp, rp)
        else:
            sftp.put(lp, rp)
            count += 1
    return count


# ---------- 远程命令 ----------
def run_remote(client, cmd, label=""):
    if label:
        log(label)
    stdin, stdout, stderr = client.exec_command(cmd)
    out = stdout.read().decode(errors="replace")
    rc = stdout.channel.recv_exit_status()
    errout = stderr.read().decode(errors="replace")
    if out.strip():
        print(out.rstrip())
    if errout.strip():
        print(errout.rstrip())
    return rc, out, errout


# 禁用 Nginx 默认 server 段（注释掉 nginx.conf 中 http 块内的第一个 server 块）
DISABLE_DEFAULT_SERVER_PY = r'''
import shutil
src="/etc/nginx/nginx.conf"
shutil.copy(src, src+".bak")
with open(src) as f:
    lines=f.readlines()
out=[]; ins=False; indent=0
for l in lines:
    if not ins and l.strip()=="server {":
        indent=len(l)-len(l.lstrip()); ins=True
        out.append("# "+l); continue
    if ins:
        ci=len(l)-len(l.lstrip())
        if l.strip()=="}" and ci==indent:
            ins=False; out.append("# "+l); continue
        out.append("# "+l); continue
    out.append(l)
with open(src,"w") as f:
    f.writelines(out)
print("DEFAULT_SERVER_DISABLED")
'''


def main():
    # 解析参数
    args = sys.argv[1:]
    force_build = "--build" in args
    args = [a for a in args if a != "--build"]
    ecs_ip = args[0] if len(args) >= 1 else "8.160.170.230"
    ssh_user = args[1] if len(args) >= 2 else "root"

    log(f"目标 ECS：{ssh_user}@{ecs_ip}")

    # 1. 本地构建（按需）
    if force_build or not os.path.isdir(DIST_DIR):
        log("1/6 本地构建 ...")
        env = os.environ.copy()
        node_dir = r"C:\Users\Administrator\.workbuddy\binaries\node\versions\22.22.2"
        env["PATH"] = node_dir + os.pathsep + env.get("PATH", "")
        r = subprocess.run(["npm", "run", "build"], cwd=PROJECT_ROOT, env=env, shell=True)
        if r.returncode != 0:
            err("构建失败")
            sys.exit(1)
    else:
        log("1/6 跳过构建（dist 已存在，加 --build 强制重建）")
    if not os.path.isdir(DIST_DIR):
        err("dist 目录不存在")
        sys.exit(1)

    # 2. 连接 ECS
    log("2/6 连接 ECS ...")
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect(ecs_ip, username=ssh_user, key_filename=SSH_KEY, timeout=20)
    except Exception as e:
        err(f"SSH 连接失败：{e}")
        sys.exit(1)
    log("    连接成功")

    try:
        # 3. 清空远程 web 目录并上传 dist
        log("3/6 上传 dist ...")
        run_remote(client, f"rm -rf {REMOTE_WEB_DIR}/* && mkdir -p {REMOTE_WEB_DIR}")
        sftp = client.open_sftp()
        n = upload_dir(sftp, DIST_DIR, REMOTE_WEB_DIR)
        sftp.close()
        log(f"    已上传 {n} 个文件")

        # 4. 上传 nginx 配置
        log("4/6 上传 nginx 配置 ...")
        sftp = client.open_sftp()
        try:
            sftp.stat(REMOTE_CONF_DIR)
        except IOError:
            sftp.mkdir(REMOTE_CONF_DIR)
        sftp.put(NGINX_CONF, f"{REMOTE_CONF_DIR}/{REMOTE_CONF_FILE}")
        sftp.close()
        log("    ultraseek.conf 已上传")

        # 5. 禁用默认 server + nginx -t + 重启
        log("5/6 配置 Nginx 并重启 ...")
        # 写入临时 python 脚本到远程
        sftp = client.open_sftp()
        tmp_py = "/tmp/_disable_default_server.py"
        with sftp.open(tmp_py, "w") as f:
            f.write(DISABLE_DEFAULT_SERVER_PY)
        sftp.close()
        rc, _, _ = run_remote(client, f"python3 {tmp_py} && rm -f {tmp_py}")
        if rc != 0:
            err("禁用默认 server 失败")
            sys.exit(1)
        rc, _, _ = run_remote(client, "nginx -t 2>&1")
        if rc != 0:
            err("nginx -t 失败，回滚配置")
            run_remote(client, "cp /etc/nginx/nginx.conf.bak /etc/nginx/nginx.conf 2>/dev/null")
            sys.exit(1)
        run_remote(client, "systemctl restart nginx && echo NGINX_RESTARTED")

        # 6. 验证
        log("6/6 验证访问 ...")
        rc, out, _ = run_remote(client, f"curl -s -o /dev/null -w '%{{http_code}}' http://127.0.0.1/ && echo ''")
        rc2, out2, _ = run_remote(client, "curl -s http://127.0.0.1/ | grep -o '<title>[^<]*</title>' | head -1")

    finally:
        client.close()

    print()
    log("✅ 部署完成！", YELLOW)
    print(f"   HTTP 访问：http://{ecs_ip}")
    print(f"   绑定域名后：http://www.chaomifilter.com")
    print()
    print("   下一步：")
    print(f"     1. 阿里云 ECS 安全组放行 80/443 端口（如尚未放行）")
    print(f"     2. 域名 DNS 添加 A 记录：www.chaomifilter.com → {ecs_ip}")
    print(f"     3. 申请 HTTPS 证书（见 deploy/README.md）")


if __name__ == "__main__":
    main()
