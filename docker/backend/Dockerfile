FROM node:14

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install
COPY ./DatasetSearchUI/node/ /app/
RUN npm install .


EXPOSE 3000
ENTRYPOINT ["node", "app.js"]
