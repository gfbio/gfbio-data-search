# GFBio search 

This repository holds the search interface of GFBio. It is based on the Dai:Si
search interface. That interface is written in Angular and also comes with a
node server to handle the backend related tasks.

## Local development 

Clone the repository. Then check out the DatasetSearchUI as submodule. Finally,
run the start script to get a fully dockerized local version.

Run `start.sh` script:  

```
./start.sh
```

It will automatically restart docker containers if they are already running.  
For more details please have a look inside `start.sh` script.

Stopping the containers manually.

```
docker-compose down
```

## The submodule approach 

The main purpose of using the submodule structure is to developm in the
search-ui folder our own version of the search with different branding and nav
e.g. So the **search-iu** folder is a simple create-react-app with only one
component called NavBar at the moment.

## Branches

Currently, there are two important branches in here. One contains an NFDI
branded version of the search interface. This is in the 24-ddp branch. Please
do not merge it into master. 

Master contains the tip of development and the currently productive instance of
the GFBio branded search.

## Deployment

Currently, we have two machines deployed on DenBi running code from master and
from the 24-ddp branch. They both are located on the machine docker-lxc in the
DenBi dev project being reachable at 

* search.gfbio.dev (future search.gfbio.org, gfbio productive search instance)
* ddp.gfbio.dev (data discover portal prepared for all hands conference and future nfdi4bio search)
