#!/bin/bash

# 定义变量
SOURCE_DIR="docs/.vuepress/dist/" # 打包的路径
REMOTE_USER="root" # Ubuntu一般是root
REMOTE_HOST="" # 服务器ip地址
REMOTE_DIR="/var/www/html/" # 目标目录，会把本地的上传到服务器上这个位置

# 在本地执行
# 生成静态文件
echo "正在生成静态文件..."
npm run docs:build

# 确认部署
echo "即将部署到服务器: $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR"
read -p "确认部署？(y/n): " confirm
if [ "$confirm" != "y" ]; then
    echo "部署已取消"
    exit 1
fi

# 使用rsync部署
echo "开始部署..."
rsync -avz $SOURCE_DIR $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR

# 检查部署结果
if [ $? -eq 0 ]; then
    echo "博客部署完成!"
else
    echo "部署失败，请检查错误信息"
fi