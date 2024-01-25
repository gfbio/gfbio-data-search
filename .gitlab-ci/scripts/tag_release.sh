#!/bin/bash
cp /home/gitlab-runner/.search-gfbio.node.env ./search/node/.env
cp /home/gitlab-runner/.environment.prod.ts ./search/angular/src/environments/environment.prod.ts
docker-compose -f staging.yml build --no-cache --force-rm
docker-compose -f staging.yml down
docker-compose -f staging.yml up -d
