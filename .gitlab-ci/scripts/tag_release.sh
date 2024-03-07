#!/bin/bash
cp /home/gitlab-runner/environments/search.gfbio.org/search.gfbio.org.backend.env ./search/backend/.env
cp /home/gitlab-runner/environments/search.gfbio.org/search.gfbio.org.frontend.env ./search/frontend/src/environments/environment.prod.ts
docker-compose -f production.yml build --no-cache --force-rm
docker-compose -f production.yml down
docker-compose -f production.yml up -d
