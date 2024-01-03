# Start services in the correct order
up:
	docker-compose up -d

# Populate Elasticsearch
populate:
	docker-compose up -d
	sleep 10  # Wait for Elasticsearch to be likely up
	pushd index && ./populate_index.sh && popd

# Stop services
down:
	docker-compose down

# Rebuild and restart services
restart: down up

init: up populate 

.PHONY: up populate down restart init
