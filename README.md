# GFBio Data Search #

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.8308204.svg)](https://doi.org/10.5281/zenodo.8308204)

## Description

The GFBio Data Search is based on the [Dai:Si search UI](#ref1) and enables a search of datasets
which are distributed and published across th [GFBio data centers](https://gfbio.org/data-centers/).
The data centers and the data sources they provide are listed in an aggregator service. 
A harvester service collects the resources from the aggregator and extracts the information into an Elasticsearch index. 

## Developer guide 

The UI component itself is writtin in Angular and combined with a thin backend layer
which is written in node which takes care of data handling. You can clone the repository
and adapt the source code to your needs. A test instance of the
search can be built for local testing using the start script which is included
in the repository. it builds the UI and the backend and runs the search
interface in a dockerzed environment available for you exploration and
development via the browser. 

```
./start.sh
```

Stopping the containers manually.

```
docker-compose down
```

## Contact Us
Please email any questions and comments to our [Service Helpdesk](mailto:info@gfbio.org) (<info@gfbio.org>).

## References

<a name="ref1"></a>[Shafiei, F., Löffler, F., Thiel, S., Opasjumruskit, K., Grabiger, D., Rauh, P.,
König-Ries, B.: [Dai:Si] - A Modular Dataset Retrieval Framework with a
Semantic Search for Biological Data, 2021](https://api.semanticscholar.org/CorpusID:240005304)

## Acknowledgements

- This work was supported by the German Research Foundation (DFG) within the project “Establishment of the National Research Data Infrastructure (NFDI)” in the consortium NFDI4Biodiversity (project number [442032008](https://gepris.dfg.de/gepris/projekt/442032008)).
- This work was supported by the German Research Foundation (DFG) within the project "German Federation for Biological Data e.V.: Concept for a sustainable research data management of environmental data for Germany." (project number [408180549](https://gepris.dfg.de/gepris/projekt/408180549)).