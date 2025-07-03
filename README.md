# GFBio Data Search

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.8308204.svg)](https://doi.org/10.5281/zenodo.8308204)

## Description

The GFBio Dataset Search, built upon the Dai:Si Dataset Search UI, facilitates the exploration of datasets distributed and published across the [GFBio data centers](https://gfbio.org/data-centers/). It is an integral part of the GFBio Search and Harvesting Infrastructure, as depicted below.

![Structure Diagram](/assets/diagrams/search.png)

## Version

Current version: 1.0.0

See [CHANGELOG.md](./CHANGELOG.md) for details on version history and changes.

## Developer Guide

This section provides a guide for setting up and operating the GFBio Dataset Search for local development. It focuses on the local development stack, outlined in the Docker Compose file (`docker-compose.yml`). This file configures three main services: a Node Express API for the backend, an Angular application for the frontend, and an Elasticsearch index for indexing and retrieving search results.

### Docker Stack

```yaml
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
    networks:
      - custom_network

  frontend:
    build:
      context: .
      dockerfile: ./docker/frontend/Dockerfile.dev
    container_name: gfbio_search_frontend_dev
    volumes:
      - ./search/frontend:/frontend
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

networks:
  custom_network:
    driver: bridge
```

To initiate the local development stack for the GFBio Dataset Search, perform the following three steps: copy the environment file for backend configuration from a template, build the Docker containers, and populate the Elasticsearch index with dummy data. These steps are automated by an 'init' command in the Makefile, executable on Linux and Unix-like systems. Execute the command from the base folder of the repository:

```bash
make init
```

For general operations within the local development environment, use docker-compose to start, stop, and rebuild containers:

```bash
docker-compose up
```

To rebuild the services, especially after changes to the Docker configuration:

```bash
docker-compose up --build
```

To stop the running services and clean up the local development environment:

```bash
docker-compose down
```

After starting the stack, access the frontend in your browser at:

```
localhost:4200
```

Modifications to the frontend source code will automatically trigger a browser reload, reflecting changes immediately. Changes to the backend code will automatically restart the Node server.

**Note:** When changing information in the backend environment file, you must rebuild the containers to apply the changes, as environment variables are set during build time.

### Frontend and Backend Code

The backend and frontend code are located under the `search` folder:

```
search
├── backend
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── server.js
│   ├── src
│   │   ├── ...
│   └── tests
├── frontend
│   ├── angular.json
│   ├── dist
│   │   └── DatasetSearch
│   ├── karma.conf.js
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── src
│   │   ├── ...
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.spec.json
│   └── tslint.json
└── LICENSE
```

### The Index

Information about the Elasticsearch index is located in the `index` folder and
comprises the current mapping, the script to populate the index with dummy data
and the sample data:

```
index
├── index_mapping.json
├── populate_index.sh
└── sample_data.json
```

## Contact Us

Please email any questions and comments to our [Service Helpdesk](mailto:info@gfbio.org) (<info@gfbio.org>).

## References

- Shafiei, F., Löffler, F., Thiel, S., Opasjumruskit, K., Grabiger, D., Rauh, P., König-Ries, B.: [Dai:Si] - A Modular Dataset Retrieval Framework with a Semantic Search for Biological Data, 2021. [Link](https://api.semanticscholar.org/CorpusID:240005304)

## Acknowledgements

- This work was supported by the German Research Foundation (DFG) within the project “Establishment of the National Research Data Infrastructure (NFDI)” in the consortium NFDI4Biodiversity (project number [442032008](https://gepris.dfg.de/gepris/projekt/442032008)).
- This work was supported by the German Research Foundation (DFG) within the project "German Federation for Biological Data e.V.: Concept for a sustainable research data management of environmental data for Germany" (project number [408180549](https://gepris.dfg.de/gepris/projekt/408180549)).
