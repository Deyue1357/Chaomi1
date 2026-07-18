#!/bin/bash
#==============================================================
# 超觅 Ultraseek 官网 — 阿里云 OSS 静态网站部署脚本
#--------------------------------------------------------------
# 依赖：ossutil（阿里云官方命令行工具）
#   安装：https://help.aliyun.com/document_detail/120075.html
#
# 用法：
#   1. 修改下方【配置区】为你的 Bucket / 区域
#   2. 首次运行：ossutil config 输入 AccessKey ID / Secret
#   3. bash deploy/oss-deploy.sh
#==============================================================
set -euo pipefail

#====================== 配置区（按需修改）======================
BUCKET="ultraseek-website"                # OSS Bucket 名称（全局唯一，需小写）
REGION="oss-cn-hangzhou"                  # OSS 区域（杭州示例）
ENDPOINT="oss-cn-hangzhou.aliyuncs.com"   # 与区域对应的外网 Endpoint
DIST_DIR="$(cd "$(dirname "$0")/.." && pwd)/dist"   # 构建产物目录
ACCESS_KEY_ID="${ALIYUN_AK_ID:-}"         # 可用环境变量注入
ACCESS_KEY_SECRET="${ALIYUN_AK_SECRET:-}"
#==============================================================

# 颜色输出
green(){ printf "\033[32m%s\033[0m\n" "$1"; }
red(){   printf "\033[31m%s\033[0m\n" "$1"; }

# 1. 检查 ossutil 是否安装
if ! command -v ossutil >/dev/null 2>&1; then
  red "[错误] 未检测到 ossutil，请先安装："
  echo "  https://help.aliyun.com/document_detail/120075.html"
  exit 1
fi

# 2. 检查 dist 目录
if [ ! -d "$DIST_DIR" ]; then
  red "[错误] 构建产物目录不存在：$DIST_DIR"
  echo "  请先在项目根目录运行：npm run build"
  exit 1
fi

green "==> 构建 OSS Endpoint Host: $BUCKET.$ENDPOINT"

# 3. 配置鉴权（若提供了 AK 则用环境变量，否则用 ossutil config 已存配置）
if [ -n "$ACCESS_KEY_ID" ] && [ -n "$ACCESS_KEY_SECRET" ]; then
  ossutil config -i "$ACCESS_KEY_ID" -k "$ACCESS_KEY_SECRET" -e "$ENDPOINT" >/dev/null
fi

# 4. 同步 dist 到 OSS（--delete 保持与本地一致，public-read 允许公网读）
green "==> 上传 $DIST_DIR 到 oss://$BUCKET/ ..."
ossutil cp "$DIST_DIR/" "oss://$BUCKET/" \
  --recursive \
  --force \
  --update \
  --acl public-read \
  -e "$ENDPOINT" \
  --exclude ".DS_Store" \
  --exclude "Thumbs.db"

# 5. 设置静态网站托管（默认首页 + 404 都指向 index.html，支持前端路由）
green "==> 配置静态网站托管 ..."
ossutil website "oss://$BUCKET/" \
  --index-document "index.html" \
  --error-document "index.html" \
  -e "$ENDPOINT" >/dev/null

green "==> 部署完成！"
echo ""
echo "  访问地址（OSS 默认域名）："
echo "    https://${BUCKET}.${ENDPOINT}/index.html"
echo ""
echo "  绑定自定义域名后："
echo "    https://www.ultraseek.com"
echo ""
echo "  下一步：在 OSS 控制台 → Bucket → 传输管理 → 绑定自定义域名"
