#==============================================================
# 超觅 Ultraseek 官网 — 多阶段构建 Dockerfile
#--------------------------------------------------------------
# 阶段 1：Node 构建，产出 dist/
# 阶段 2：Nginx 运行，体积小（~30MB）
#
# 构建与运行：
#   docker build -t ultraseek-website:latest .
#   docker run -d -p 80:80 --name ultraseek ultraseek-website:latest
#
# 推送到阿里云容器镜像服务（ACR）：
#   docker tag ultraseek-website:latest registry.cn-hangzhou.aliyuncs.com/<命名空间>/ultraseek:latest
#   docker push registry.cn-hangzhou.aliyuncs.com/<命名空间>/ultraseek:latest
#==============================================================

# ---------- 阶段 1：构建 ----------
FROM node:22-alpine AS builder

WORKDIR /app

# 利用 Docker 层缓存：先装依赖（仅 package 文件变化时才重装）
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

# 拷贝源码并构建
COPY . .
RUN npm run build

# ---------- 阶段 2：运行 ----------
FROM nginx:1.27-alpine

# 替换默认配置
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

# 拷贝构建产物
COPY --from=builder /app/dist /usr/share/nginx/html

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/healthz || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
