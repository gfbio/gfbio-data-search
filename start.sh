#!/bin/bash

# deactive default navbar
sed -i 's/class="toolbarMenu"/class="toolbarMenu" style="display:none;"/g' DatasetSearchUI/angular/src/app/app.component.html

# install and build
# NG_CLI_ANALYTICS=ci will not ask if you want to participate in angular analitics during package installation
cd DatasetSearchUI/angular/ && NG_CLI_ANALYTICS=ci npm i && npm run build && cd ../../

# build our own react app
cd search-ui && npm i && npm run build && cd ../

# copy files from angular
mkdir -p search-ui/build/static/js/angular
cp DatasetSearchUI/angular/dist/DatasetSearch/*.js search-ui/build/static/js/angular/
cp DatasetSearchUI/angular/dist/DatasetSearch/*.js.map search-ui/build/static/js/angular/

mkdir -p search-ui/build/assets/img
cp DatasetSearchUI/angular/dist/DatasetSearch/assets/img/* search-ui/build/assets/img/

# restart docker
docker-compose down
docker-compose up -d