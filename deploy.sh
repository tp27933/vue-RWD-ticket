#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:tp27933/ticket.git master:gh-pages

cd -
# 在終端執行  sh deploy.sh
