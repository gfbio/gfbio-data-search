#!/bin/bash

# deactive default navbar
sed -i 's/class="toolbarMenu"/class="toolbarMenu" style="display:none;"/g' DatasetSearchUIOwn/angular/src/app/app.component.html
# some node versions error out
# https://stackoverflow.com/questions/69665222/node-js-17-0-1-gatsby-error-digital-envelope-routinesunsupported-err-os
# because of: node: --openssl-legacy-provider is not allowed in NODE_OPTIONS
export NODE_OPTIONS=--openssl-legacy-provider

# install and build
# NG_CLI_ANALYTICS=ci will not ask if you want to participate in angular analitics during package installation
cd DatasetSearchUIOwn/angular/ && NG_CLI_ANALYTICS=ci npm i --force && npm run build && cd ../../

# build our own react app
cd search-ui && npm --force i && npm run build && cd ../

# copy files from angular
mkdir -p search-ui/build/static/js/angular
cp DatasetSearchUIOwn/angular/dist/DatasetSearch/*.js search-ui/build/static/js/angular/
cp DatasetSearchUIOwn/angular/dist/DatasetSearch/*.js.map search-ui/build/static/js/angular/
cp DatasetSearchUIOwn/angular/dist/DatasetSearch/styles.css* search-ui/build/static/css/
# adding fonts
cp DatasetSearchUIOwn/angular/dist/DatasetSearch/*.woff search-ui/build/static/css/
cp DatasetSearchUIOwn/angular/dist/DatasetSearch/*.woff2 search-ui/build/static/css/
cp DatasetSearchUIOwn/angular/dist/DatasetSearch/*.ttf search-ui/build/static/css/

mkdir -p search-ui/build/static/fonts
cp DatasetSearchUIOwn/angular/dist/DatasetSearch/static/fonts/* search-ui/build/static/fonts/

mkdir -p search-ui/build/assets/img
cp DatasetSearchUIOwn/angular/dist/DatasetSearch/assets/img/* search-ui/build/assets/img/

# copy third party css's
cp search-ui/src/third-party-css/*.css search-ui/build/static/css/
# clean submodule folder
# cd DatasetSearchUI && git reset --hard && git clean -f -d && cd ../

# restart docker
docker-compose down
docker-compose up -d
