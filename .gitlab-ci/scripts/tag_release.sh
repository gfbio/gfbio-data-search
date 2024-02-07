#!/bin/bash
cp /home/gitlab-runner/.search-gfbio.node.env ./search/backend/.env
cp /home/gitlab-runner/.environment.prod.ts ./search/frontend/src/environments/environment.prod.ts
docker-compose -f production.yml build --no-cache --force-rm
docker-compose -f production.yml down
docker-compose -f production.yml up -d
