import { Component } from "@angular/core";

interface Capability {
  icon: string;
  title: string;
  text: string;
}

interface JourneyStep {
  step: string;
  title: string;
  description: string;
}

interface SystemComponent {
  name: string;
  tag: string;
  text: string;
}

/**
 * About page for the GFBio Search portal.
 *
 * The portal (search.gfbio.org) is the protagonist of this page: the place
 * where researchers find, filter, map and collect biodiversity datasets. The
 * Data Provider Manager, harvester and search index are presented as the
 * surrounding infrastructure that feeds the portal — not as the subject.
 */
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent {
  // System architecture diagram, centred on the Search portal: the path a
  // dataset travels from a contributing data center, through registration,
  // harvesting and the search index, to a researcher's search.
  architectureDiagram = `
flowchart LR
    subgraph Sources ["Data centers and providers"]
        direction TB
        collections("Natural-history collections")
        repos("PANGAEA, ENA, DataCite")
        gbif("GBIF")
    end

    dpm("Data Provider Manager<br/><i>register and validate</i>")
    harvester("Harvester<br/><i>collect and harmonise</i>")
    index[("Search index")]
    portal["GFBio Search portal<br/><b>search.gfbio.org</b>"]
    researchers(["Researchers"])

    collections -->|register| dpm
    dpm -->|harvest feed| harvester
    repos --> harvester
    gbif --> harvester
    harvester -->|harmonised records| index
    index ==> portal
    portal ==> researchers

    style portal fill:#81b248,stroke:#5f8a34,color:#ffffff,stroke-width:2px
`;

  // What the Search portal lets you do, at a glance.
  capabilities: Capability[] = [
    {
      icon: "fa-search",
      title: "Search across everything",
      text: "One search box queries harmonised records from natural-history collections, environmental archives and molecular repositories at the same time.",
    },
    {
      icon: "fa-filter",
      title: "Filter and refine",
      text: "Narrow results by data center, taxonomy, location, time and more, so you reach the datasets that matter to your work.",
    },
    {
      icon: "fa-map-marker-alt",
      title: "Explore on the map",
      text: "See where data was collected and draw an area on the map to find datasets from a specific region.",
    },
    {
      icon: "fa-shopping-basket",
      title: "Collect and reuse",
      text: "Gather datasets of interest into a basket and carry them onward into GFBio tools for citation and analysis.",
    },
  ];

  // The end-to-end journey of a dataset, ending in the Search portal.
  journeySteps: JourneyStep[] = [
    {
      step: "Step 1",
      title: "Register",
      description:
        "A data center registers its providers and datasets in the Data Provider Manager and marks the records that are ready to be published.",
    },
    {
      step: "Step 2",
      title: "Validate",
      description:
        "Each dataset's metadata is checked against international biodiversity standards and scored for quality, so problems are caught before publication.",
    },
    {
      step: "Step 3",
      title: "Harvest & harmonise",
      description:
        "The harvester collects metadata from every source — in whatever standard each provider speaks — and translates it all into one common format.",
    },
    {
      step: "Step 4",
      title: "Discover & collect",
      description:
        "The harmonised records become searchable in the GFBio Search portal, where you find, filter, map and collect the datasets you need.",
    },
  ];

  // The wider infrastructure the portal sits at the front of. The portal is
  // the subject ("This service"); everything else is supporting context.
  components: SystemComponent[] = [
    {
      name: "GFBio Search portal",
      tag: "This service",
      text: "The public website at search.gfbio.org where you search, filter, map and collect biodiversity datasets — the front door this page describes.",
    },
    {
      name: "Search index",
      tag: "Storage",
      text: "A single catalogue holding one harmonised record per dataset — the searchable heart that the portal queries.",
    },
    {
      name: "Harvester",
      tag: "Collection",
      text: "Gathers metadata from every source and translates the many input standards into the one shared format the index uses.",
    },
    {
      name: "Data Provider Manager",
      tag: "Registration",
      text: "Where data centers register their providers and datasets and mark them ready for publication, feeding the harvester upstream.",
    },
    {
      name: "Terminology service",
      tag: "Connected",
      text: "Expands your search with scientific synonyms and common names, so you find data even when the wording differs.",
    },
    {
      name: "Collections & VAT",
      tag: "Connected",
      text: "GFBio tools that take the datasets you collect and move them into citation and analysis workflows.",
    },
  ];

  // Standards and principles the platform is built on.
  standards: string[] = [
    "FAIR data principles",
    "ABCD / BioCASe",
    "Darwin Core",
    "OAI-PMH",
    "DataCite",
    "EML",
    "NFDI4Biodiversity",
  ];
}
