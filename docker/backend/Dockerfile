# Use Node.js version 14 as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker layer caching
COPY ./DatasetSearchUI/node/package*.json /app/

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY ./DatasetSearchUI/node/ /app/

# Expose port 3000
EXPOSE 3000

# Define the command to run the app
ENTRYPOINT ["node", "app.js"]
