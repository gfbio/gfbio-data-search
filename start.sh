#!/bin/bash

# deactivate default navbar
sed -i 's/class="toolbarMenu"/class="toolbarMenu" style="display:none;"/g' DatasetSearchUI/angular/src/app/app.component.html

# some node versions error out
# https://stackoverflow.com/questions/69665222/node-js-17-0-1-gatsby-error-digital-envelope-routinesunsupported-err-os
# because of: node: --openssl-legacy-provider is not allowed in NODE_OPTIONS
export NODE_OPTIONS=--openssl-legacy-provider

# install and build
pushd DatasetSearchUI/angular/
NG_CLI_ANALYTICS=ci npm i --force
ng build --configuration=production --output-hashing=none --aot=true --sourceMap=false --buildOptimizer=true --optimization
popd

pushd search-ui 
npm --force i 
npm run build -- --configuration=production --output-hashing=none --aot=true --sourceMap=false --buildOptimizer=true --optimization
popd

echo "after build in DatasetSearchUI/angular/"
echo "----------------------------"

# copy files from angular
mkdir -p search-ui/build/static/js/angular
echo "COPY FILES FROM ANGULAR ----------------------------"
pwd
cp DatasetSearchUI/angular/dist/DatasetSearch/*.js search-ui/build/static/js/angular/
# cp DatasetSearchUI/angular/dist/DatasetSearch/*.js.map search-ui/build/static/js/angular/

# adding css
mkdir -p search-ui/build/static/css
cp DatasetSearchUI/angular/dist/DatasetSearch/*.css search-ui/build/static/css/
# cp DatasetSearchUI/angular/dist/DatasetSearch/*.css.map search-ui/build/static/css/
echo "CSS ----------------------------"

# adding fonts
cp DatasetSearchUI/angular/dist/DatasetSearch/*.woff search-ui/build/static/css/
cp DatasetSearchUI/angular/dist/DatasetSearch/*.woff2 search-ui/build/static/css/
cp DatasetSearchUI/angular/dist/DatasetSearch/*.ttf search-ui/build/static/css/

mkdir -p search-ui/build/static/fonts
cp DatasetSearchUI/angular/dist/DatasetSearch/static/fonts/* search-ui/build/static/fonts/
echo "FONTS ----------------------------"

mkdir -p search-ui/build/assets/img
cp DatasetSearchUI/angular/dist/DatasetSearch/assets/img/* search-ui/build/assets/img/
echo "IMAGES ----------------------------"

# copy third party css's
cp search-ui/src/third-party-css/*.css search-ui/build/static/css/
echo "3rd PARTY CSS ----------------------------"

# TODO: is this important ? Why is this in comments ?
# clean submodule folder
# cd DatasetSearchUI && git reset --hard && git clean -f -d && cd ../


# restart docker
docker-compose down
# docker-compose build
docker-compose build --no-cache --force-rm
#docker-compose build
docker-compose up -d
