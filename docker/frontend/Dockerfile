# Compile stage
FROM node:14 AS build-env

ARG SERVICE_HOST='http:\/\/localhost:3000'

# Create app directory
RUN mkdir -p /angular
RUN mkdir -p /search-ui

# Copy files
COPY ./DatasetSearchUIOwn/angular/ /angular
COPY ./search-ui/ /search-ui

# Build Angular
RUN cd /angular && sed -i 's/class="toolbarMenu"/class="toolbarMenu" style="display:none;"/g' src/app/app.component.html && \
    sed -i "s/url.*=.*;/url = '${SERVICE_HOST}';/g" src/app/services/remote/node.service.ts && \
    NG_CLI_ANALYTICS=ci npm i --force && npm run build -- --configuration=production --output-hashing=none --aot=true --sourceMap=false --buildOptimizer=true --optimization

#Build GFBio
RUN cd /search-ui && npm --force i && npm run build -- --configuration=production --output-hashing=none --aot=true --sourceMap=false --buildOptimizer=true --optimization && \
    mkdir -p /search-ui/build/static/js/angular && \
    cp /angular/dist/DatasetSearch/*.js /search-ui/build/static/js/angular/ && \
    cp /angular/dist/DatasetSearch/*.css /search-ui/build/static/css/ && \
    cp /angular/dist/DatasetSearch/*.woff /search-ui/build/static/css/ && \
    cp /angular/dist/DatasetSearch/*.woff2 /search-ui/build/static/css/&& \
    cp /angular/dist/DatasetSearch/*.ttf /search-ui/build/static/css/ && \
    mkdir -p /search-ui/build/static/fonts && \
    cp /angular/dist/DatasetSearch/static/fonts/* /search-ui/build/static/fonts/ && \
    mkdir -p /search-ui/build/assets/img && \
    cp /angular/dist/DatasetSearch/assets/img/* /search-ui/build/assets/img/ && \
    cp /search-ui/src/third-party-css/*.css /search-ui/build/static/css/

# cp /angular/dist/DatasetSearch/*.js.map /search-ui/build/static/js/angular/ && \

# Final stage
FROM httpd:2.4

COPY --from=build-env /search-ui/build/ /usr/local/apache2/htdocs/
