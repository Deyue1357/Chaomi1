#!/bin/bash
#==============================================================
# 超觅 Ultraseek 官网 — 阿里云 ECS 一键部署脚本
#--------------------------------------------------------------
# 功能：本地构建 → 上传 dist 到 ECS → 配置 Nginx → 重启生效
#
# 用法：
#   bash deploy/ecs-deploy.sh <ECS公网IP> [ssh用户]
#   示例：bash deploy/ecs-deploy.sh 47.96.123.45 root
#
# 前提：
#   1. ECS 已开放 22(SSH)/80/443 端口（安全组）
#   2. 本机能 SSH 免密登录 ECS（已配置 SSH 密钥）
#   3. ECS 系统为 CentOS/Alibaba Cloud Linux/Ubuntu
#==============================================================
set -euo pipefail

green(){ printf "\033[32m%s\033[0m\n" "$1"; }
red(){   printf "\033[31m%s\033[0m\n" "$1"; }

# 参数校验
ECS_IP="${1:-}"
SSH_USER="${2:-root}"

if [ -z "$ECS_IP" ]; then
  red "[错误] 用法：bash deploy/ecs-deploy.sh <ECS公网IP> [ssh用户]"
  echo "  示例：bash deploy/ecs-deploy.sh 47.96.123.45 root"
  exit 1
fi

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST_DIR="$PROJECT_ROOT/dist"
NGINX_CONF="$PROJECT_ROOT/deploy/nginx.conf"
REMOTE_WEB_DIR="/usr/share/nginx/html"
REMOTE_CONF_DIR="/etc/nginx/conf.d"

green "==> 目标 ECS：$SSH_USER@$ECS_IP"

# 1. 本地构建
green "==> 1/5 本地构建 ..."
cd "$PROJECT_ROOT"
if [ ! -f package.json ]; then
  red "[错误] 未找到 package.json，请确认在项目根目录运行"
  exit 1
fi
npm run build

if [ ! -d "$DIST_DIR" ]; then
  red "[错误] 构建失败，dist 目录不存在"
  exit 1
fi
green "    构建完成：$DIST_DIR"

# 2. 测试 SSH 连接
green "==> 2/5 测试 SSH 连接 ..."
if ! ssh -o ConnectTimeout=10 -o BatchMode=yes "$SSH_USER@$ECS_IP" "echo ok" >/dev/null 2>&1; then
  red "[错误] SSH 免密登录失败：$SSH_USER@$ECS_IP"
  echo "  请先配置 SSH 密钥免密登录："
  echo "    ssh-copy-id -i ~/.ssh/id_ed25519.pub $SSH_USER@$ECS_IP"
  exit 1
fi
green "    SSH 连接正常"

# 3. 安装 Nginx（如未安装）
green "==> 3/5 检查/安装 Nginx ..."
ssh "$SSH_USER@$ECS_IP" 'bash -s' <<'INSTALL_NGINX'
  if command -v nginx >/dev/null 2>&1; then
    echo "nginx already installed: $(nginx -v 2>&1)"
  else
    if command -v yum >/dev/null 2>&1; then
      yum install -y nginx
    elif command -v apt >/dev/null 2>&1; then
      apt update && apt install -y nginx
    else
      echo "Unsupported OS" >&2
      exit 1
    fi
  fi
  systemctl enable nginx
INSTALL_NGINX

# 4. 上传 dist 和 nginx 配置
green "==> 4/5 上传文件 ..."
# 清空远程 web 目录再上传，避免残留旧文件
ssh "$SSH_USER@$ECS_IP" "rm -rf $REMOTE_WEB_DIR && mkdir -p $REMOTE_WEB_DIR"
scp -r "$DIST_DIR"/* "$SSH_USER@$ECS_IP:$REMOTE_WEB_DIR/"
scp "$NGINX_CONF" "$SSH_USER@$ECS_IP:$REMOTE_CONF_DIR/ultraseek.conf"
green "    文件上传完成"

# 5. 重启 Nginx
green "==> 5/5 重启 Nginx ..."
ssh "$SSH_USER@$ECS_IP" "nginx -t && systemctl restart nginx"
green "    Nginx 已重启"

echo ""
green "==> 部署完成！"
echo ""
echo "  HTTP 访问：http://$ECS_IP"
echo "  绑定域名后：https://www.chaomifilter.com"
echo ""
echo "  下一步："
echo "    1. 域名 DNS 添加 A 记录：www.chaomifilter.com → $ECS_IP"
echo "    2. 申请 HTTPS 证书（见 deploy/README.md 方案B 第B4步）"
