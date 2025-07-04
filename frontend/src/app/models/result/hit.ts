import { Citation } from "./citation";
import { Description } from "./description";
import { Linkage } from "./linkage";
import { Type } from "class-transformer";
import { UpperLabel } from "./upperLabel";

// every dataset
export class Hit {
  private title: string;
  private id: string;
  private titleUrl: string;
  private titleTooltip: string;
  @Type(() => Description)
  private description: Array<Description>;
  // the colorful labels on the top of every dataset
  @Type(() => UpperLabel)
  private upperLabels: Array<UpperLabel>;
  private licence: Array<string>;
  // every dataset can contain images or videos or sound tracks
  private multimediaObjs: Array<any>;
  private vat: boolean;
  private latitude: string;
  private longitude: string;
  private vatTooltip: string;
  @Type(() => Citation)
  private citation: Citation;
  // it contains the information related to the download of the dataset
  @Type(() => Linkage)
  private linkage: Linkage;
  // it contains the information related to the download of the dataset
  private metadatalink: string;
  // it contains the information related to the download of the dataset
  private dcIdentifier: string;
  // every dataset can be shown on the map with an specific color
  private color: string;
  // most of the information of the dataset is in the xml
  private xml: string;
  // if this dataset has been selected by the user
  private checkbox: boolean;

  //
  private datalink: string;

  private parentIdentifier: string;

  private dcType: Array<string>;

  constructor() {
    // ... other property assignments ...
    this.checkbox = false; // Set the default value to false
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    this.color = color;
  }

  getMetadatalink(): string {
    return this.metadatalink;
  }

  setMetadatalink(metadatalink: string): void {
    if (metadatalink != "undefined" && metadatalink != null) {
      this.metadatalink = encodeURI(metadatalink);
    } else {
      this.metadatalink = null;
    }

    // this.metadatalink = metadatalink;
  }

  getIdentifier(): string {
    return this.dcIdentifier;
  }

  setIdentifier(dcIdentifier: string): void {
    this.dcIdentifier = dcIdentifier;
  }

  getLinkage(): Linkage {
    return this.linkage;
  }

  setLinkage(linkage: Linkage): void {
    this.linkage = linkage;
  }

  getXml(): string {
    return this.xml;
  }

  setXml(xml: string): void {
    this.xml = xml;
  }

  getTitleUrl(): string {
    return this.titleUrl;
  }

  setTitleUrl(titleUrl: string): void {
    if (titleUrl != "undefined" && titleUrl != null) {
      this.titleUrl = encodeURI(titleUrl);
    } else {
      this.titleUrl = null;
    }

    // this.titleUrl = titleUrl;
  }

  getDescription(): Array<Description> {
    return this.description;
  }

  setDescription(description: Array<Description>): void {
    this.description = description;
  }

  getUpperLabels(): Array<UpperLabel> {
    return this.upperLabels;
  }

  setUpperLabels(upperLabels: Array<UpperLabel>): void {
    this.upperLabels = upperLabels;
  }

  getLicence(): Array<string> {
    return this.licence;
  }

  setLicence(licence: Array<string>): void {
    this.licence = licence;
  }

  getVat(): boolean {
    return this.vat;
  }

  setVat(vat: boolean): void {
    this.vat = vat;
  }

  getVatTooltip(): string {
    return this.vatTooltip;
  }

  setVatTooltip(vatTooltip: string): void {
    this.vatTooltip = vatTooltip;
  }

  getCitation(): Citation {
    return this.citation;
  }

  setCitation(citation: Citation): void {
    this.citation = citation;
  }

  getMultimediaObjs(): Array<any> {
    return this.multimediaObjs;
  }

  setMultimediaObjs(multimediaObjs: Array<any>): void {
    this.multimediaObjs = multimediaObjs;
  }

  getLatitude(): string {
    return this.latitude;
  }

  setLatitude(latitude: string): void {
    this.latitude = latitude;
  }

  getLongitude(): string {
    return this.longitude;
  }

  setLongitude(longitude: string): void {
    this.longitude = longitude;
  }

  getTitleTooltip(): string {
    return this.titleTooltip;
  }

  setTitleTooltip(titleTooltip: string): void {
    this.titleTooltip = titleTooltip;
  }

  getCheckBox(): boolean {
    return this.checkbox;
  }

  setCheckbox(checkbox: boolean): void {
    this.checkbox = checkbox;
  }

  getDatalink(): string {
    return this.datalink;
  }

  setDatalink(datalink: string): void {
    if (datalink != "undefined" && datalink != null) {
      this.datalink = encodeURI(datalink);
    } else {
      this.datalink = null;
    }

    // this.datalink = datalink;
  }

  getParentIdentifier(): string {
    return this.parentIdentifier;
  }

  setParentIdentifier(parentIdentifier: string): void {
    this.parentIdentifier = parentIdentifier;
  }

  getType(): Array<string> {
    return this.dcType;
  }

  setType(dcType: Array<string>): void {
    this.dcType = dcType;
  }
}
