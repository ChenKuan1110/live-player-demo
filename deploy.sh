# !/usr/bin/zsh

# 发生错误时终止
set -e

# 构建
yarn build

# 进入构建文件夹
cd dist

# 删除之前的git仓库
rm -rf .git


git init
git branch -M main
git add -A
git commit -m 'deploy'


# 部署在项目中， 
git push -f git@github.com:ChenKuan1110/live-player-demo.git main:gh-pages

cd -
