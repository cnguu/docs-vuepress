set -e
yarn build
rm -fr public_temp
cp -ir public public_temp
cd public_temp
echo imwiki.cn > CNAME
git init
git add -A
git commit -m deploy
git push -f git@github.com:cnguu/docs-vuepress.git master
cd ../
rm -fr public_temp
cd -
