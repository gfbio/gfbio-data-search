
# Compile stage
FROM node:14 AS build-env

ARG SERVICE_HOST='http:\/\/localhost:3000'

# Create app directory
RUN mkdir -p /angular
RUN mkdir -p /search-ui

# Copy files
COPY ./DatasetSearchUI/angular/ /angular
COPY ./search-ui/ /search-ui


# Build Angular
RUN sed -i 's/class="toolbarMenu"/class="toolbarMenu" style="display:none;"/g' /angular/src/app/app.component.html && \
    sed -i "s/url.*=.*;/url = '${SERVICE_HOST}';/g" /angular/src/app/services/remote/node.service.ts && \
    cd /angular && NG_CLI_ANALYTICS=ci npm install && npm run build


#Build GFBio
RUN cd /search-ui && npm i && npm run build && \
    mkdir -p /search-ui/build/static/js/angular && \
    cp /angular/dist/DaiSi/*.js /search-ui/build/static/js/angular/ && \
    cp /angular/dist/DaiSi/*.js.map /search-ui/build/static/js/angular/ && \
    mkdir -p /search-ui/build/assets/img && \
    cp /angular/dist/DaiSi/assets/img/* /search-ui/build/assets/img/


# Final stage
FROM httpd:2.4

COPY --from=build-env /search-ui/build/ /usr/local/apache2/htdocs/
