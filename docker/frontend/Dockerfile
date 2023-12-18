# Stage 1: Build the Angular application
FROM node:14 as build
WORKDIR /angular

# Copy package.json and package-lock.json for npm install
COPY ./search/angular/package*.json ./
RUN npm install

# Copy the rest of the Angular project files
COPY ./search/angular/ .

# Build the application
RUN npm run ng build -- --configuration production

# Stage 2: Serve the application with HTTPD
FROM httpd:2.4

# Copy the built Angular app to the HTTPD serve directory
COPY --from=build /angular/dist/DatasetSearch /usr/local/apache2/htdocs/
