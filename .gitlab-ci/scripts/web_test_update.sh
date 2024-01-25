#!/bin/bash
ISSUE_ID=$(awk -F- '{print $2}' <<< ${CI_COMMIT_REF_NAME})
TEST_NAME=$ISSUE_ID-$PROJECT_NAME
cp /home/gitlab-runner/.search-gfbio.node.env ./search/node/.env
cp /home/gitlab-runner/.environment.prod.ts ./search/angular/src/environments/environment.prod.ts
sed -i s/BRANCH/${TEST_NAME}/g $COMPOSE_FILE
docker-compose -f $COMPOSE_FILE build
docker stack rm $TEST_NAME || true
while [[ $(docker ps | grep $TEST_NAME | wc -l) > 0 ]]; do sleep 1; done
docker stack deploy -c $COMPOSE_FILE $TEST_NAME
