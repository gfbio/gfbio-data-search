#!/bin/bash

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "npm could not be found. Please install Node.js and npm."
    exit 1
fi

# Check if curl is installed
if ! command -v curl &> /dev/null
then
    echo "curl could not be found. Please install curl."
    exit 1
fi

# Check if node is installed
if ! command -v node &> /dev/null
then
    echo "node could not be found. Please install Node.js."
    exit 1
fi

# Check if the index is empty
response=$(curl -s -X GET "localhost:9200/search-dev/_count")
count=$(echo $response | jq '.count')

if [ "$count" -gt 0 ]; then
    echo "Index is not empty. It contains $count documents."
    exit 1
fi

# Install elasticdump using npm
npm install elasticdump
if [ $? -ne 0 ]; then
    echo "Failed to install elasticdump. Please check npm configurations."
    exit 1
fi

# Setup Elasticsearch index
curl -X PUT "localhost:9200/search-dev" -H 'Content-Type: application/json' -d @index_mapping.json 
if [ $? -ne 0 ]; then
    echo "Failed to setup Elasticsearch index. Please ensure Elasticsearch is running and accessible."
    exit 1
fi

# Using elasticdump to import data
node node_modules/elasticdump/bin/elasticdump \
  --output=http://localhost:9200/search-dev \
  --input=sample_data.json \
  --type=data

if [ $? -ne 0 ]; then
    echo "Failed to import data using elasticdump. Please check if all parameters are correct and Elasticsearch is running."
    exit 1
fi

echo "Script completed successfully!"
