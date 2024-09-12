#!/bin/bash

###############################
#  the backend configuraiton  #
###############################

cat <<EOF > ./search/backend/.env
ELASTIC_INDEX_URL="${ELASTIC_INDEX_URL}"
ELASTIC_INDEX_NAME="${ELASTIC_INDEX_NAME}"
ELASTIC_INDEX_PORT= "${ELASTIC_INDEX_PORT}"
SESSION_SECRET= "${SESSION_SECRET}"
COLLECTIONS_API_URL="https://collections.gfbio.dev/api/collections/"
GFBIOTS_URL="https://dev-gfbio.bgbm.org/api/terminologies/"
COLLECTIONS_API_TOKEN= "${COLLECTIONS_API_TOKEN}"
VAT_ROOT_URL="https://vat.gfbio.org"
EOF

################################
#  the frontend configuraiton  #
################################

cp ./search/frontend/src/environments/environment.ts ./search/frontend/src/environments/environment.prod.ts
sed -i 's/production: false,/production: true,/' ./search/frontend/src/environments/environment.prod.ts
sed -i 's|apiUrl: "http://localhost:3000",|apiUrl: "https://search.gfbio.org",|' ./search/frontend/src/environments/environment.prod.ts
sed -i 's|vatRootUrl: "https://vat.gfbio.dev",|apiUrl: "https://vat.gfbio.org",|' ./search/frontend/src/environments/environment.prod.ts

############################
#  build the docker stack  #
############################

docker-compose -f production.yml build --no-cache --force-rm
docker-compose -f production.yml down
docker-compose -f production.yml up -d
