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


update-backend-version:
	$(eval LAST_TAG=$(shell git describe --tags `git rev-list --tags --max-count=1`))
	sed -i 's/"version": "[0-9]*\.[0-9]*\.[0-9]*"/"version": "$(LAST_TAG)"/' ./search/backend/package.json
	git add ./search/backend/package.json
	git commit -m "Bump backend version to $(LAST_TAG)"

update-frontend-version:
	$(eval LAST_TAG=$(shell git describe --tags `git rev-list --tags --max-count=1`))
	sed -i 's/"version": "[0-9]*\.[0-9]*\.[0-9]*"/"version": "$(LAST_TAG)"/' ./search/frontend/package.json 
	git add ./search/frontend/package.json
	git commit -m "Bump frontend version to $(LAST_TAG)"

get-last-tag-release:
	@# Fetch the most recent tag
	$(eval LAST_TAG=$(shell git describe --tags `git rev-list --tags --max-count=1`))
	@echo "Current tag release is: $(LAST_TAG)"

tag-patch-release:
	@# Fetch the most recent tag
	$(eval LAST_TAG=$(shell git describe --tags `git rev-list --tags --max-count=1`))
	@# Break the tag into major, minor, and patch numbers
	$(eval MAJOR=$(shell echo $(LAST_TAG) | cut -d. -f1))
	$(eval MINOR=$(shell echo $(LAST_TAG) | cut -d. -f2))
	$(eval PATCH=$(shell echo $(LAST_TAG) | cut -d. -f3))
	@# Increment the patch version
	$(eval NEW_PATCH=$(shell echo $$(($(PATCH) + 1))))
	@# Construct new tag
	$(eval NEW_TAG=$(MAJOR).$(MINOR).$(NEW_PATCH))
	make update-backend-version  # Update backend package.json
	make update-frontend-version # Update frontend package.json
	@echo "Creating new tag: $(NEW_TAG)"
	@# Tag the repository
	git tag $(NEW_TAG)
	git push
	git push origin $(NEW_TAG)

tag-minor-release:
	@# Fetch the most recent tag
	$(eval LAST_TAG=$(shell git describe --tags `git rev-list --tags --max-count=1`))
	@# Break the tag into major, minor, and patch numbers
	$(eval MAJOR=$(shell echo $(LAST_TAG) | cut -d. -f1))
	$(eval MINOR=$(shell echo $(LAST_TAG) | cut -d. -f2))
	@# Increment the minor version
	$(eval NEW_MINOR=$(shell echo $$(($(MINOR) + 1))))
	@# Reset patch to 0
	$(eval NEW_TAG=$(MAJOR).$(NEW_MINOR).0)
	make update-backend-version  # Update backend package.json
	make update-frontend-version # Update frontend package.json
	@echo "Creating new minor version tag: $(NEW_TAG)"
	@# Tag the repository
	git tag $(NEW_TAG)
	git push
	git push origin $(NEW_TAG)

tag-major-release:
	@# Fetch the most recent tag
	$(eval LAST_TAG=$(shell git describe --tags `git rev-list --tags --max-count=1`))
	@# Break the tag into major, minor, and patch numbers
	$(eval MAJOR=$(shell echo $(LAST_TAG) | cut -d. -f1))
	@# Increment the major version
	$(eval NEW_MAJOR=$(shell echo $$(($(MAJOR) + 1))))
	@# Reset minor and patch to 0
	$(eval NEW_TAG=$(NEW_MAJOR).0.0)
	make update-backend-version  # Update backend package.json
	make update-frontend-version # Update frontend package.json
	@echo "Creating new major version tag: $(NEW_TAG)"
	@# Tag the repository
	git tag $(NEW_TAG)
	git push
	git push origin $(NEW_TAG)

.PHONY: up populate down restart init tag-patch-release tag-minor-release tag-major-release get-last-tag-releas update-backend-version update-frontend-version
