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
RUN sed -i 's/class="toolbarMenu"/class="toolbarMenu" style="display:none;"/g' /angular/src/app/app.component.html && \
    sed -i "s/url.*=.*;/url = '${SERVICE_HOST}';/g" /angular/src/app/services/remote/node.service.ts && \
    cd /angular && NG_CLI_ANALYTICS=ci npm install && npm run build

#Build GFBio
RUN cd /search-ui && npm i && npm run build && \
    mkdir -p /search-ui/build/static/js/angular && \
    cp /angular/dist/DatasetSearch/*.js /search-ui/build/static/js/angular/ && \
    cp /angular/dist/DatasetSearch/*.js.map /search-ui/build/static/js/angular/ && \
    cp /angular/dist/DatasetSearch/styles.css* /search-ui/build/static/css/ && \
    cp /angular/dist/DatasetSearch/*.woff /search-ui/build/static/css/ && \
    cp /angular/dist/DatasetSearch/*.woff2 /search-ui/build/static/css/&& \
    cp /angular/dist/DatasetSearch/*.ttf /search-ui/build/static/css/ && \
    mkdir -p /search-ui/build/assets/img && \
    cp /angular/dist/DatasetSearch/assets/img/* /search-ui/build/assets/img/


# Final stage
FROM httpd:2.4

COPY --from=build-env /search-ui/build/ /usr/local/apache2/htdocs/
