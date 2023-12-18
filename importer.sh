#!/bin/bash

# Set the index name
INDEX="new_index_name"

# Loop through each line in the sample_data.json file
while IFS= read -r line
do
  # Post the document to Elasticsearch
  curl -X POST "localhost:9200/${INDEX}/_doc/" -H 'Content-Type: application/json' -d "$line"
done < "output.json"
