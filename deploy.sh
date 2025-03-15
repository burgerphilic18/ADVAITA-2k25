echo " branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying app"
scp -r dist/* advita@172.16.2.20:/var/www/202.137.211.143/

echo "Done!"