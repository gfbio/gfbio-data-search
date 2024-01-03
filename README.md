# GFBio Data Search #

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.8308204.svg)](https://doi.org/10.5281/zenodo.8308204)

## Description

The GFBio Data Search, built upon the Dai:Si Search UI, facilitates the
exploration of datasets distributed and published across various [GFBio data
centers](https://gfbio.org/data-centers/). These data centers, along with the
resources they offer, are cataloged in an aggregator service. A dedicated
harvester service then retrieves resources from the aggregator, extracting and
organizing the information into an Elasticsearch index for efficient searching.

## Developer guide 

This document provides guidance on building and running the GFBio Data Search
application using Docker. The application consists of three main components:

* Backend: A Node.js application serving as the backend.
* Frontend: An Angular-based user interface. 

Both applications are located in the search folder.

```
search
├── angular
│   ├── angular.json
│   ├── dist
│   ├── karma.conf.js
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── src
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── LICENSE
└── node
    ├── app.js
    ├── config
    ├── connectionElastic.js
    ├── controllers
    ├── fileSaver.js
    ├── gfbio.js
    ├── models
    ├── package.json
    ├── package-lock.json
    ├── README.md
```
 
The Docker environment is configured to suit both local development and
production deployment. The local Docker environment for development runs the
front-end, the back-end, and a dockerized Elasticsearch index - all important
components for an easy start.

### Local Development Setup

For building and running the containers. Navigate to the Project Directory

```sh
cd path/to/project
```

Then build and start the containers

```sh
docker-compose up --build
```

This command builds the images and starts the containers defined in
docker-compose.yml. The --build flag ensures that Docker rebuilds the images,
which is useful during development.

Accessing the application

* The frontend can be accessed at http://localhost:4200.
* The backend is available at http://localhost:3000.

When the containers are running. As a last step of preparation the local
Elasticsearch index needs to be set up when you run it for the first time. You
can use the script which is located in the index folder. 

In the root folder of this repository you also find a Make script for your
convenience to execute the commands for starting, stoping, restarting and
initializing the index for you. For example:

```
# run the containers and populate the index with dummy metadata
make init
```
 
Making Changes

When making changes to the source code, the respective containers can be
rebuilt and restarted. For changes in the backend or frontend Dockerfiles,
rerun the docker-compose up --build command.

## Contact Us

Please email any questions and comments to our [Service
Helpdesk](mailto:info@gfbio.org) (<info@gfbio.org>).

## References

<a name="ref1"></a>[Shafiei, F., Löffler, F., Thiel, S., Opasjumruskit, K.,
Grabiger, D., Rauh, P., König-Ries, B.: [Dai:Si] - A Modular Dataset Retrieval
Framework with a Semantic Search for Biological Data,
2021](https://api.semanticscholar.org/CorpusID:240005304)

## Acknowledgements

- This work was supported by the German Research Foundation (DFG) within the project “Establishment of the National Research Data Infrastructure (NFDI)” in the consortium NFDI4Biodiversity (project number [442032008](https://gepris.dfg.de/gepris/projekt/442032008)).
- This work was supported by the German Research Foundation (DFG) within the project "German Federation for Biological Data e.V.: Concept for a sustainable research data management of environmental data for Germany." (project number [408180549](https://gepris.dfg.de/gepris/projekt/408180549)).
