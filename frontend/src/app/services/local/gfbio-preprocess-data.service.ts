import { Injectable } from "@angular/core";
import { Result } from "../../models/result/result";
import { Hit } from "../../models/result/hit";
import { Citation } from "../../models/result/citation";
import { CommunicationService } from "./communication.service";
import { Aggregation } from "../../models/result/aggregation";
import { Facet } from "../../models/result/facet";
import { Description } from "../../models/result/description";
import { Linkage } from "../../models/result/linkage";
import { UpperLabel } from "../../models/result/upperLabel";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class GfbioPreprocessDataService {
  constructor(private communicationService: CommunicationService) {}

  public static dataCenter = environment.dataCenter;
  public static dataProvider = environment.dataProvider;
  public static dataType = environment.dataType;
  public static parameter = environment.parameter;
  public static taxonomy = environment.taxonomy;
  public static geographicRegion = environment.geographicRegion;
  public static type = environment.type;
  public static datacenterTooltips = environment.datacenterTooltips;
  private id;
  private colors = environment.colors;
  private vatTooltip = environment.vatTooltip;
  private noCoordinates = environment.noCoordinates;

  getResult(jsonObject, parameters: Array<any>): Result {
    // console.log('Incoming jsonObject in getResult:', jsonObject);
    // console.log('Incoming parameters in getResult:', parameters);

    this.id = 10;
    const result = new Result();

    if (jsonObject?.lastItem) {
      result.setSemanticKeys(jsonObject.lastItem);
    }

    const hits: Hit[] = this.getHits(jsonObject, parameters[0]);
    result.setHits(hits);

    if (jsonObject?.aggregations) {
      result.setAggregations(this.getAggregations(jsonObject));
    }

    if (jsonObject?.hits?.total) {
      result.setTotalNumber(jsonObject.hits.total);
    }

    result.setOtherFilters(this.getOtherFilters());
    result.setDatePickers(this.getDatePickers());

    if (jsonObject?.termData) {
      result.setTermData(jsonObject.termData);
    }

    // console.log('Processed result:', result);
    return result;
  }

  getHits(jsonObject, semantic): Hit[] {
    // console.log('Incoming jsonObject in getHits:', jsonObject);
    // console.log('Incoming semantic parameter in getHits:', semantic);

    const hits: Hit[] = [];
    const hitsOfObject = jsonObject?.hits?.hits;

    if (!hitsOfObject || !Array.isArray(hitsOfObject)) {
      console.warn('hitsOfObject is undefined or not an array:', hitsOfObject);
      return hits;
    }

    hitsOfObject.forEach((item) => {
      if (item) {
        hits.push(this.getHit(item, semantic));
      } else {
        console.warn('Encountered undefined or null item in hitsOfObject');
      }
    });

    // console.log('Processed hits:', hits);
    return hits;
  }

  // The rest of the methods remain unchanged

  getCitation(item, titleURL): Citation {
    const citation = new Citation();
    citation.setDOI(titleURL);
    
    // Set defaults in case XML parsing fails
    citation.setTitle(item?.title || 'Unknown Title');
    citation.setSource(item?.citation_source || '');
    
    try {
      const xmlStr = item?.xml;
      
      // Skip XML parsing if no XML data is present
      if (xmlStr) {
        const jsonResult = this.communicationService.xmltoJson(xmlStr)?.elements?.[0]?.elements;
        
        if (jsonResult && Array.isArray(jsonResult)) {
          const creator = [];
          let gbifDownloadDOI = null;
          
          jsonResult.forEach((value) => {
            switch (value?.name) {
              case "dc:title": {
                citation.setTitle(value?.elements?.[0]?.text);
                break;
              }
              case "dc:creator": {
                creator.push(value?.elements?.[0]?.text);
                break;
              }
              case "dc:date": {
                citation.setDate(value?.elements?.[0]?.text);
                break;
              }
              case "dc:identifier": {
                // Check if this is a GBIF download DOI
                const identifier = value?.elements?.[0]?.text;
                if (identifier && identifier.includes('doi.org/10.15468/dl.')) {
                  gbifDownloadDOI = identifier;
                }
                break;
              }
            }
          });
          
          citation.setCreator(creator);
          
          // For GBIF downloads, use the download DOI instead of the occurrence URL
          if (gbifDownloadDOI) {
            citation.setDOI(gbifDownloadDOI);
          }
        }
      }
    } catch (error) {
      console.warn('Error parsing XML in getCitation:', error);
      // Fall back to basic item properties
      citation.setDate(item?.date || '');
      citation.setCreator([item?.creator || 'Unknown Creator']);
    }
    
    // Handle dataCenter/dataProvider
    let dataCenter = 'Unknown';
    
    if (item?.dataCenter) {
      dataCenter = item.dataCenter.split(' ').pop();
      if (dataCenter === 'Science') {
        dataCenter = 'PANGAEA';
      }
    } else if (item?.dataProvider) {
      // For data provider items, use the abbreviation (part before the dash)
      dataCenter = item.dataProvider.split(' - ')[0];
      
      // Map GBIF data providers to GBIF for proper citation handling
      if (dataCenter === 'Data Provider LAND' || dataCenter.includes('GBIF')) {
        dataCenter = 'GBIF';
      }
    }
    
    citation.setDataCenter(dataCenter);
    
    return citation;
  }

  getTopic(dataset, semantic): string {
    const dom = document
      .createRange()
      .createContextualFragment(dataset?._source?.["html-1"]);
    let topic = "";
    dom?.querySelectorAll(".citation span").forEach((spanValue) => {
      topic = topic + spanValue.innerHTML;
      if (spanValue.classList.contains("date")) {
        topic = topic + ": ";
      }
    });
    if (semantic) {
      const highLightTitle = dataset?.highlight?.citation_title?.[0];
      let matchTitle = highLightTitle?.replace(/<em>/g, "");
      matchTitle = matchTitle?.replace(/<\/em>/g, "");
      topic = topic?.replace(matchTitle, highLightTitle);
    }
    return topic;
  }

  getTopicUrl(dom): string {
    const titleURL = dom?.querySelector(".citation a")?.getAttribute("href");
    if (titleURL === undefined || titleURL === "undefined") {
      return "undefined";
    } else {
      return titleURL;
    }
  }

  getLicense(dataset): [] {
    let license = dataset?._source?.licenseShort;
    if (!Array.isArray(license)) {
      license = [license];
    }
    license.forEach((l, i) => {
      const allLicences = [
        "CC BY",
        "CC BY-NC",
        "CC BY-NC-ND",
        "CC BY-NC-SA",
        "CC BY-ND",
        "CC BY-SA",
        "CC0",
        "GPL",
        "All rights reserved",
      ];
      if (!allLicences.includes(l)) {
        license[i] = "Other";
      }
    });
    return license;
  }

  getHit(item, semantic): Hit {
    const source = item?._source;
    const hit = new Hit();
    hit.setId(item?._id);
    const dom = document
      .createRange()
      .createContextualFragment(source?.["html-1"]);
    hit.setTitleUrl(this.getTopicUrl(dom));
    hit.setTitle(this.getTopic(item, semantic));
    hit.setUpperLabels(this.getLabels(source));
    hit.setCitation(this.getCitation(source, this.getTopicUrl(dom)));
    hit.setLicence(this.getLicense(item));
    hit.setVat(source?.vatVisualizable);
    hit.setVatTooltip(this.vatTooltip);
    hit.setXml(source?.xml);
    hit.setLongitude(source?.maxLongitude);
    hit.setLatitude(source?.minLatitude);
    hit.setMetadatalink(source?.metadatalink);
    hit.setDatalink(source?.datalink);
    // set array of descriptions
    const tr = dom?.querySelectorAll(".desc tr");
    const description = [];
    tr.forEach((row) => {
      const title = row?.querySelectorAll("td")?.[0]?.innerHTML;
      const value = row?.querySelectorAll("td")?.[1]?.innerHTML;
      if (title === "Parameters:" || title === "Summary:") {
        const descriptionItem = new Description();
        descriptionItem.setTitle(title);
        descriptionItem.setValue(value);
        description.push(descriptionItem);
      }
    });
    // if the search is semantic, puts the highlighted words in <em></em> tag
    if (semantic) {
      const highLightDescription = item?.highlight?.description;
      if (
        highLightDescription !== undefined &&
        highLightDescription.length > 0
      ) {
        highLightDescription.forEach((entry) => {
          const entryCopy = entry;
          entry = entry?.replace(/<em>/g, "");
          entry = entry?.replace(/<\/em>/g, "");
          description.forEach((row) => {
            row.value = row.value?.replace(entry, entryCopy);
          });
        });
      }
    }
    // in order to extract some properties from xml, I converted it from string to xml format
    // the properties that are going to be extracted are: identifier, linkage and MultimediaObjs
    const multimediaObjs: Array<any> = [];
    const types: Array<string> = [];
    const linkage = new Linkage();
    let relation = "";
    
    try {
      // Only attempt to parse XML if it exists and is valid
      if (source?.xml && typeof source.xml === 'string' && source.xml.trim()) {
        // Simple validation - check for proper XML structure before parsing
        if (source.xml.trim().startsWith('<')) {
          const xml = this.communicationService.xmltoJson(source.xml)?.elements?.[0]?.elements;
          
          // Only process if the XML was successfully parsed
          if (xml && Array.isArray(xml)) {
            xml.forEach((element) => {
              if ("elements" in element) {
                if (element.name === "dc:identifier") {
                  hit.setIdentifier(element.elements[0].text);
                }
                if (element.name === "dc:type") {
                  types.push(element.elements[0].text);
                }
                if (element.name === "parentIdentifier") {
                  hit.setParentIdentifier(element.elements[0].text);
                }
                if (element.name === "linkage") {
                  if (element.attributes.type === "multimedia") {
                    const text = element.elements[0].text;
                    const differentTypes = [
                      [".mp3", "sound"],
                      [".mp4", "video"],
                      [".jpg", "picture"],
                      [".tiff", "picture"],
                      [".png", "picture"],
                      [".wav", "sound"],
                    ];
                    differentTypes.forEach((types) => {
                      if (text.includes(types[0])) {
                        const multimediaObj = {
                          type: types[1],
                          url: text,
                        };
                        multimediaObjs.push(multimediaObj);
                      }
                    });
                    linkage.setMultimedia(multimediaObjs);
                  }
                  
                  if (element.attributes.type === "metadata") {
                    linkage.setMetadata(element.elements[0].text);
                  }
                  if (element.attributes.type === "data") {
                    linkage.setData(element.elements[0].text);
                  }
                }
                // some information related to description (relation) should be extracted from xml
                if (element.name === "dc:relation") {
                  let value = element.elements[0].text;
                  if (value.startsWith("http")) {
                    value = "<a " + 'href = "' + value + '" >' + value + "</a>";
                  }
                  relation = relation + "<li>" + value + "</li>";
                }
              }
            });
          }
        } else {
          console.warn('XML data is invalid or malformed:', source.xml.substring(0, 50) + '...');
        }
      } else {
        // No XML data available - this is normal for data provider items
        console.log('No XML data available for this item');
      }
    } catch (error) {
      console.warn('Error parsing XML in getHit:', error);
      // Set default values for fallback
      hit.setIdentifier(source?.identifier || 'Unknown Identifier');
      if (source?.type) {
        types.push(source.type);
      }
    }
    
    if (relation !== "") {
      // dirty hack open in new tab as the index is contianing not only information but also markup
      const modifiedRelation = relation.replace(/<a /g, '<a target="_blank" ');
      const descriptionItem = new Description();
      descriptionItem.setTitle("Relation:");
      descriptionItem.setValue("<ul>" + modifiedRelation + "</ul>");
      description.push(descriptionItem);
    }
    hit.setType(types);
    hit.setLinkage(linkage);
    hit.setDescription(description);
    hit.setMultimediaObjs(multimediaObjs);
    if (hit.getLatitude() !== undefined) {
      this.id--;
      hit.setColor(this.colors[this.id]);
    }
    return hit;
  }

  getLabels(item): UpperLabel[] {
    const upperLabels: UpperLabel[] = [];
    // if the citation date exist, a blue label will be created
    if (item?.citation_date) {
      const year = new UpperLabel();
      year.setInnerInfo(item?.citation_date?.substring(0, 4));
      year.setTooltip("Publication year");
      year.setColorClass("bg-label-blue");
      upperLabels.push(year);
    }
    // if the dataset is open access, a green label will be created
    if (!item?.accessRestricted) {
      const access = new UpperLabel();
      access.setInnerInfo("Open Access");
      access.setTooltip(
        "This dataset is open access. You can use primary data and metadata."
      );
      access.setColorClass("bg-label-green");
      upperLabels.push(access);
    }
    // the label related to the datacenter with the golden red color will be created
    // it contains the name of the datacenter
    const dataCenter = new UpperLabel();
    if (item?.dataCenter) {
      dataCenter.setInnerInfo(item.dataCenter.split(" ").pop());
      if (dataCenter.getInnerInfo() === "Science") {
        dataCenter.setInnerInfo("PANGAEA");
      }
      if (dataCenter.getInnerInfo() === "Archive") {
        dataCenter.setInnerInfo("ENA");
      }
    } else if (item?.dataProvider) {
      // Handle data provider case
      dataCenter.setInnerInfo(item.dataProvider.split(" - ")[0]); // Take the short name before the dash
    } else {
      // Set a default value if neither dataCenter nor dataProvider exists
      dataCenter.setInnerInfo("Unknown");
    }
    switch (dataCenter.getInnerInfo()) {
      case "SNSB":
        dataCenter.setTooltip(
          GfbioPreprocessDataService.datacenterTooltips.SNSB
        );
        break;
      case "SGN":
        dataCenter.setTooltip(
          GfbioPreprocessDataService.datacenterTooltips.SGN
        );
        break;
      case "BGBM":
        dataCenter.setTooltip(
          GfbioPreprocessDataService.datacenterTooltips.BGBM
        );
        break;
      case "MfN":
        dataCenter.setTooltip(
          GfbioPreprocessDataService.datacenterTooltips.MfN
        );
        break;
      case "ZFMK":
        dataCenter.setTooltip(
          GfbioPreprocessDataService.datacenterTooltips.ZFMK
        );
        break;
      case "SMNS":
        dataCenter.setTooltip(
          GfbioPreprocessDataService.datacenterTooltips.SMNS
        );
        break;
      case "PANGAEA":
        dataCenter.setTooltip(
          GfbioPreprocessDataService.datacenterTooltips.PANGAEA
        );
        break;
      case "DSMZ":
        dataCenter.setTooltip(
          GfbioPreprocessDataService.datacenterTooltips.DSMZ
        );
        break;
      case "Gatersleben":
        dataCenter.setTooltip(
          GfbioPreprocessDataService.datacenterTooltips.Gatersleben
        );
        break;
      case "ENA":
        dataCenter.setTooltip(
          GfbioPreprocessDataService.datacenterTooltips.ENA
        );
        break;
      default:
        dataCenter.setTooltip("Publisher");
    }
    dataCenter.setColorClass("bg-goldenrod");
    upperLabels.push(dataCenter);

    return upperLabels;
  }

  getAggregations(jsonObject): Aggregation[] {
    const aggregationsJson = jsonObject?.aggregations;
    if (!aggregationsJson || typeof aggregationsJson !== "object") {
      console.warn(
        "Aggregations JSON is undefined or not an object:",
        aggregationsJson
      );
      return []; // Return empty array for invalid input
    }
    
    // Instead of relying on order, explicitly create aggregations for each type
    const aggregations: Aggregation[] = [];
    
    // 1. Add Data Center
    // Process all providers in a single facet (both data centers and data providers)  
    if (aggregationsJson.dataProvider) {
      const dataProviderAgg = new Aggregation();
      dataProviderAgg.setId('dataProvider');
      dataProviderAgg.setTitle(GfbioPreprocessDataService.dataProvider);
      dataProviderAgg.setIcon(this.selectIcon(GfbioPreprocessDataService.dataProvider));
      
      const buckets: Facet[] = [];
      console.log('Raw dataProvider aggs:', JSON.stringify(aggregationsJson.dataProvider));
      
      // Process dataProvider buckets
      aggregationsJson.dataProvider.buckets.forEach((item) => {
        const bucket = new Facet();
        bucket.setDocCount(item?.doc_count);
        bucket.setKey(item?.key);
        
        // Check isDataCenter flag in the aggregation buckets
        // For debugging
        console.log(`Processing provider: ${item?.key}`);
        console.log('isDataCenter buckets:', item.isDataCenter?.buckets);
        
        // Set isDataCenter flag based on the aggregation results
        const isDataCenter = item.isDataCenter?.buckets?.some(b => b.key === 1 || b.key_as_string === 'true') || false;
        console.log(`Provider ${item?.key} isDataCenter: ${isDataCenter}`);
        
        bucket.setIsDataCenter(isDataCenter);
        buckets.push(bucket);
      });
      
      // Set the processed buckets on the aggregation
      dataProviderAgg.setFacets(buckets);
      aggregations.push(dataProviderAgg);
    }
    
    // 3. Process remaining aggregations
    const remainingKeys = Object.keys(aggregationsJson).filter(
      key => key !== 'dataProvider'
    );
    
    // Map to display titles
    const titleMapping = {
      'gfbioDataKind': GfbioPreprocessDataService.dataType,
      'parameter': GfbioPreprocessDataService.parameter,
      'taxonomy': GfbioPreprocessDataService.taxonomy,
      'type': GfbioPreprocessDataService.type,
      'region': GfbioPreprocessDataService.geographicRegion,
    };
    
    for (const key of remainingKeys) {
      const aggregation = new Aggregation();
      aggregation.setId(key);
      aggregation.setTitle(titleMapping[key] || key);
      aggregation.setIcon(this.selectIcon(aggregation.getTitle()));
      
      const buckets: Facet[] = [];
      const bucketsData = aggregationsJson[key]?.buckets || [];
      
      bucketsData.forEach((item) => {
        const bucket = new Facet();
        bucket.setDocCount(item?.doc_count);
        bucket.setKey(item?.key);
        buckets.push(bucket);
      });
      
      aggregation.setFacets(buckets);
      aggregations.push(aggregation);
    }
    
    return aggregations;
  }

  getOtherFilters(): Array<any> {
    return [
      {
        icon: "map",
        title: "Visualizable in VAT",
        parameters: [
          {
            label: "Visualizable in VAT",
            parameterType: "vatVisualizable",
            parameterValue: true,
            id: "vatVisualizable",
          },
        ],
      },
      {
        icon: "lock_outline",
        title: "Access",
        parameters: [
          {
            label: "access is restricted",
            parameterType: "accessRestricted",
            parameterValue: true,
            id: "accessRestricted",
          },
          {
            label: "open access only",
            parameterType: "accessRestricted",
            parameterValue: false,
            id: "accessOpen",
          },
        ],
      },
      {
        icon: "image",
        title: "Multimedia Object",
        parameters: [
          {
            label: "images, videos, sound files",
            parameterType: "parameterFacet",
            parameterValue: "Multimedia Object",
            id: "Multimedia",
          },
        ],
      },
    ];
  }

  getDatePickers(): Array<any> {
    return [
      {
        icon: "date_range",
        title: "Collection Date",
        type: "collection",
        inputs: [
          {
            id: "collectionStart",
            name: "Collection start date",
            type: "start date",
          },
          {
            id: "collectionEnd",
            name: "Collection end date",
            type: "end date",
          },
        ],
      },
      {
        icon: "date_range",
        title: "Publication Date",
        type: "publication",
        inputs: [
          {
            id: "publicationStart",
            name: "Publication start date",
            type: "start date",
          },
          {
            id: "publicationEnd",
            name: "Publication end date",
            type: "end date",
          },
        ],
      },
    ];
  }

  selectIcon(filter): string {
    // default icon
    let icon = "filter_list";
    switch (filter) {
      case GfbioPreprocessDataService.dataCenter: {
        icon = "storage";
        break;
      }
      case GfbioPreprocessDataService.dataProvider: {
        icon = "group";
        break;
      }
      case GfbioPreprocessDataService.dataType: {
        icon = "domain";
        break;
      }
      case GfbioPreprocessDataService.geographicRegion: {
        icon = "location_on";
        break;
      }
      case GfbioPreprocessDataService.taxonomy: {
        icon = "account_tree";
        break;
      }
      case GfbioPreprocessDataService.parameter: {
        icon = "table_view";
        break;
      }
      case GfbioPreprocessDataService.type: {
        icon = "auto_awesome_motion";
        break;
      }
    }
    return icon;
  }
}
