# 超觅 Ultraseek 官网 — 阿里云部署指南

本文档覆盖三种部署方式，推荐 **方案 A（OSS 静态托管）**，成本最低、运维最省。

---

## 方案对比

| 方案 | 适用场景 | 月成本 | 运维 | 推荐度 |
|---|---|---|---|---|
| **A. OSS 静态托管** | 纯静态站点 | 几元 | 几乎零 | ★★★★★ |
| B. ECS + Nginx | 需要服务器、有后端 | 几十元起 | 中 | ★★★ |
| C. 容器服务（ACK/ACR）| 已有 K8s 体系 | 视规格 | 高 | ★★ |

---

## 方案 A：OSS 静态网站托管（推荐）

### A1. 前置准备
- 阿里云账号（已实名认证）
- 已开通 OSS 服务：https://oss.console.aliyun.com/
- 安装 ossutil 命令行工具：https://help.aliyun.com/document_detail/120075.html

### A2. 创建 OSS Bucket
1. 登录 OSS 控制台 → **创建 Bucket**
2. 关键参数：
   - **名称**：`ultraseek-website`（全局唯一，需小写字母/数字/连字符）
   - **区域**：选离用户近的，如华东 1（杭州）
   - **存储类型**：标准存储
   - **读写权限**：**公共读**（静态网站必须）
   - **服务端加密**：无
3. 创建后记录 Bucket 名称和 Endpoint，填入 `deploy/oss-config.json`

### A3. 配置 AccessKey
**安全建议**：使用 RAM 子账号，仅授予对单个 Bucket 的 `oss:PutObject` 等必要权限。

1. RAM 控制台 → 用户 → 新建用户 `ultraseek-deploy`
2. 创建 AccessKey，记录 ID 和 Secret
3. 授权策略：`AliyunOSSFullAccess`（生产环境建议自定义最小权限）

### A4. 首次部署
```bash
cd app

# 构建产物
npm run build

# 配置 ossutil 鉴权（按提示输入 AK ID / Secret / Endpoint）
ossutil config

# 一键部署
bash deploy/oss-deploy.sh
```

或用环境变量免交互：
```bash
ALIYUN_AK_ID=LTAI5tXXXX \
ALIYUN_AK_SECRET=XXXXXXX \
bash deploy/oss-deploy.sh
```

部署成功后通过 OSS 默认域名访问：
```
https://ultraseek-website.oss-cn-hangzhou.aliyuncs.com/index.html
```

### A5. 绑定自定义域名
1. OSS 控制台 → Bucket → **传输管理** → **域名管理** → 绑定自定义域名
2. 域名（如 `www.ultraseek.com`）添加 CNAME 解析到 Bucket 外网域名：
   ```
   www.ultraseek.com CNAME ultraseek-website.oss-cn-hangzhou.aliyuncs.com
   ```
3. 等待 DNS 生效（通常几分钟到几小时）

### A6. 配置 HTTPS
1. 阿里云 SSL 证书服务 → 申请免费 DV 证书（每年 20 个免费）
2. 证书签发后，在 OSS Bucket 的域名管理中绑定证书
3. 开启 **强制 HTTPS**

### A7. 开启 CDN 加速（强烈推荐）
1. CDN 控制台 → 添加加速域名
2. 源站信息：OSS Bucket 域名
3. 加速类型：图片小文件
4. 配置回源协议 HTTPS
5. 修改 DNS：把 `www.ultraseek.com` CNAME 到 CDN 加速域名
6. 开启 **HTTPS 安全加速** + **HTTP/2**

---

## 方案 B：ECS + Nginx

### B1. 购买 ECS
- 配置建议：1 核 2G 起步，带宽 5Mbps
- 系统镜像：Alibaba Cloud Linux 3 或 Ubuntu 22.04

### B2. 部署步骤
```bash
# 在 ECS 上
sudo yum install -y nginx

# 上传 dist 到服务器
scp -r dist/* root@<ECS_IP>:/usr/share/nginx/html/

# 上传 nginx 配置
scp deploy/nginx.conf root@<ECS_IP>:/etc/nginx/conf.d/ultraseek.conf

# 启动
sudo nginx -t && sudo systemctl restart nginx
sudo systemctl enable nginx
```

### B3. 放行端口
ECS 安全组放行 80 / 443 端口。

### B4. 域名 + HTTPS
- 域名解析 A 记录到 ECS 公网 IP
- 用 Let's Encrypt 免费证书：`certbot --nginx -d www.ultraseek.com`

---

## 方案 C：容器化部署

### C1. 构建镜像
```bash
cd app
docker build -t ultraseek-website:latest .
```

### C2. 本地验证
```bash
docker run -d -p 80:80 --name ultraseek ultraseek-website:latest
# 访问 http://localhost
```

### C3. 推送到阿里云 ACR
1. 容器镜像服务控制台 → 创建个人实例（免费）
2. 创建命名空间 `ultraseek`，创建镜像仓库 `website`
3. 推送：
```bash
docker login --username=<阿里云账号> registry.cn-hangzhou.aliyuncs.com
docker tag ultraseek-website:latest registry.cn-hangzhou.aliyuncs.com/ultraseek/website:latest
docker push registry.cn-hangzhou.aliyuncs.com/ultraseek/website:latest
```

### C4. 部署到 ACK 或 SAE
- ACK（Kubernetes）：用 Deployment + Service + Ingress
- SAE（Serverless 应用引擎）：更简单，直接拉镜像部署

---

## 自动化 CI/CD

已提供 GitHub Actions 工作流 `.github/workflows/deploy-aliyun.yml`。
push 到 main 分支即自动构建并部署到 OSS，需在仓库 Settings → Secrets 中配置：
- `ALIYUN_AK_ID`：RAM 用户 AccessKey ID
- `ALIYUN_AK_SECRET`：AccessKey Secret
- `OSS_BUCKET`：Bucket 名称
- `OSS_ENDPOINT`：外网 Endpoint

详见工作流文件注释。

---

## 常见问题

**Q: 推送后页面白屏？**
A: 检查 OSS Bucket 读写权限是否为"公共读"，检查 `index.html` 是否上传成功。

**Q: 刷新页面 404？**
A: 确认已配置静态网站托管（`ossutil website` 命令或控制台设置默认首页为 index.html）。

**Q: 自定义域名访问报错？**
A: 检查 CNAME 解析是否生效，用 `dig www.ultraseek.com` 验证。

**Q: HTTPS 证书申请失败？**
A: 域名需先完成 ICP 备案，且 DNS 已正确解析到阿里云资源。
