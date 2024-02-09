# GFBio Data Search #

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.8308204.svg)](https://doi.org/10.5281/zenodo.8308204)

## Description

The GFBio Dataset Search is built based on the Dai:Si Dataset Search UI. It
facilitates the exploration of datasets which are distributed and published
across the [GFBio data centers](https://gfbio.org/data-centers/). 

## Developer guide 

This section of the document provides a guide on setting up and operating the
GFBio Dataset Search for local development purposes. It primarily focuses on
the local development stack, which is comprehensively outlined in the Docker
Compose file (docker-compose.yml). This file configures three main services: a
Node Express API for the backend, an Angular application for the frontend, and
an Elasticsearch index responsible for indexing and retrieving search results.

### Docker Stack

```
version: "3"

services:
  backend:
    build:
      context: .
      dockerfile: ./docker/backend/Dockerfile
    container_name: gfbio_search_backend_dev
    env_file:
      - ./search/backend/.env
    ports:
      - "3000:3000"
    volumes:
      - ./search/backend:/backend
      # - /app/node_modules
    networks:
      - custom_network

  frontend:
    build:
      context: .
      dockerfile: ./docker/frontend/Dockerfile.dev
    container_name: gfbio_search_frontend_dev
    volumes:
      - ./search/frontend:/frontend
      # - /app/node_modules
    ports:
      - "4200:4200"
    environment:
      - CHOKIDAR_USEPOLLING=true
    networks:
      - custom_network

  index:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.10.0
    container_name: gfbio_search_index_dev
    environment:
      - discovery.type=single-node
    ports:
      - "9200:9200"
      - "9300:9300"
    volumes:
      - esdata:/usr/share/elasticsearch/data
    networks:
      - custom_network
    # Elasticsearch specific optimizations
    ulimits:
      memlock:
        soft: -1
        hard: -1
    deploy:
      resources:
        limits:
          memory: 2g
          
volumes:
  esdata:
  # mysql_data:

networks:
  custom_network:
    driver: bridge
```

To initiate the local development stack for the GFBio Dataset Search, you need
to run the following command in your terminal:

```
docker-compose up
```

This command activates the Docker Compose process, which reads the
`docker-compose.yml` file to launch the specified services: the backend Node
Express API, the frontend Angular application, and the Elasticsearch index for
handling search functionalities.

For rebuilding the services, especially after making changes to the Docker
configuration or the service code, use the command:

```
docker-compose up --build
```

This instructs Docker Compose to rebuild the images before starting the
services, ensuring any updates are incorporated.

To stop the running services, you can use the command:

```
docker-compose down
```

This will halt all services started by Docker Compose and remove the
containers, networks, and volumes created, effectively cleaning up your local
development environment.

After starting the stack the frontend will be available to you in the browser.
under:

```
localhost:4200
```

Any modifications made to the frontend source code automatically trigger a
browser reload to reflect these changes, facilitating a swift development
process. 

### Init the Elasticsearch Index

Upon launching the development stack for the first time, it's important to note
that the search functionality will not have any data to operate with initially.
However, the repository includes some dummy data designed for the Elasticsearch
index. This sample data can be utilized to populate the index, enabling the
search feature to function and allowing developers to test and evaluate the
search capabilities within a local development environment.

The repository is equipped with a Makefile that houses a
valuable set of commands designed to manage the development
environment, including starting, stopping, restarting, and
initializing processes. To begin, you can execute the
following command:


```
make init
```

This command initiates the Docker development environment
containers and fills the Elasticsearch index with sample
data. After executing this command, when you navigate to:


```
localhost:4200 
```

you will be presented with 50 dummy datasets available for search. This setup is ideal for testing and development purposes, allowing you to simulate real-world search scenarios within the local development stack.


### Where is the code


The backend and frontend code are both located under the search folder.  

```
search
├── backend
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── server.js
│   ├── src
│   │   ├── ... 
│   └── tests
├── frontend
│   ├── angular.json
│   ├── dist
│   │   └── DatasetSearch
│   ├── karma.conf.js
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── src
│   │   ├── ... 
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.spec.json
│   └── tslint.json
└── LICENSE
```

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
