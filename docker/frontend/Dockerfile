# Stage 1: Build the Angular application
FROM node:20.9.0 as build
WORKDIR /frontend

# Copy package.json and package-lock.json for npm install
COPY ./search/frontend/package*.json ./
RUN npm install

# Copy the rest of the Angular project files
COPY ./search/frontend/ .

# Build the application
RUN npm run ng build -- --configuration production

# Stage 2: Serve the application with HTTPD
FROM httpd:2.4

# Copy the built Angular app to the HTTPD serve directory
COPY --from=build /frontend/dist/DatasetSearch /usr/local/apache2/htdocs/
