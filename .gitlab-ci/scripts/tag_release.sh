#!/bin/bash
cp /home/gitlab-runner/.search-gfbio.node.env ./search/backend/.env
cp /home/gitlab-runner/.environment.prod.ts ./search/frontend/src/environments/environment.prod.ts
docker-compose -f staging.yml build --no-cache --force-rm
docker-compose -f staging.yml down
docker-compose -f staging.yml up -d
