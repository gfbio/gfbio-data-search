# Use Node.js version 20.9.0 as the base image
FROM node:20.9.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker layer caching
COPY ./search/node/package*.json /app/

# Install app dependencies
RUN npm install

# Install Nodemon globally
RUN npm install -g nodemon

# Copy the rest of the application code
COPY ./search/node/ /app/

# Expose port 3000
EXPOSE 3000

# Define the command to run the app using Nodemon
ENTRYPOINT ["nodemon", "app.js"]
