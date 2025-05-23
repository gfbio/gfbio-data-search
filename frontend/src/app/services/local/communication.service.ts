import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Result } from "../../models/result/result";

@Injectable({
  providedIn: "root",
})
export class CommunicationService {
  private filter: Array<any> = [];
  private suggest: BehaviorSubject<any>;
  private searchKey: any;
  private urlIndex = "/gfbio";
  private IsSearchKey: BehaviorSubject<boolean>;
  private IsSemantic: boolean;
  private pagination: number;
  private result: BehaviorSubject<Result>;
  private citation: BehaviorSubject<any>;
  private removedFilter: BehaviorSubject<any>;
  private statsLoading: BehaviorSubject<boolean>;

  constructor() {
    // @ts-ignore
    this.suggest = new BehaviorSubject<any>();
    // @ts-ignore
    this.searchKey = new BehaviorSubject<any>();
    // @ts-ignore
    this.result = new BehaviorSubject<any>();
    // @ts-ignore
    this.citation = new BehaviorSubject<any>();
    // @ts-ignore
    this.removedFilter = new BehaviorSubject<any>();
    // @ts-ignore
    this.IsSearchKey = new BehaviorSubject<any>();
    // @ts-ignore
    this.statsLoading = new BehaviorSubject<boolean>(false);
  }
  setSuggest(suggest: string): void {
    this.suggest.next(suggest);
  }

  getSuggest(): Observable<string> {
    return this.suggest.asObservable();
  }
  setIsSearchKey(IsSearchKey: boolean): void {
    this.IsSearchKey.next(IsSearchKey);
  }
  getIsSearchKey(): Observable<boolean> {
    return this.IsSearchKey.asObservable();
  }
  setIsSemantic(IsSemantic: boolean): void {
    this.IsSemantic = IsSemantic;
  }
  getIsSemantic(): boolean {
    return this.IsSemantic;
  }
  setPagination(key: number): void {
    this.pagination = key;
  }
  getPagination(): number {
    return this.pagination;
  }
  setUrlIndex(key: string): void {
    this.urlIndex = key;
  }
  getUrlIndex(): string {
    return this.urlIndex;
  }
  setSearchKey(key: any): void {
    this.searchKey = key;
  }
  getSearchKey(): any {
    return this.searchKey;
  }
  setFilter(key: Array<any>): void {
    this.filter = key;
  }

  getFilter(): Array<any> {
    return this.filter;
  }

  setResult(result: any): void {
    this.result.next(result);
  }

  /**
   * Sets only the search results portion without affecting the stats
   * Used by the progressive loading implementation
   */
  setResultsOnly(result: any): void {
    // Get the current result value
    const currentResult = this.result.getValue();
    
    // If we have a current result with stats, preserve them
    if (currentResult && currentResult.getAggregations) {
      // Keep the aggregations from the current result if available
      const aggregations = currentResult.getAggregations ? currentResult.getAggregations() : undefined;
      if (aggregations) {
        // Set the aggregations on the new result if possible
        if (result.setAggregations) {
          result.setAggregations(aggregations);
        }
      }
    }
    
    // Update the result
    this.result.next(result);
  }
  
  /**
   * Updates only the stats/aggregations portion of the result
   * Used to update the UI after results are already displayed
   */
  setStats(statsData: any): void {
    // Get the current result value
    const currentResult = this.result.getValue();
    
    // If we have a current result, add the stats to it
    if (currentResult && currentResult.setAggregations) {
      currentResult.setAggregations(statsData);
      // Update the result with the new stats
      this.result.next(currentResult);
    }
  }
  
  /**
   * Indicates whether stats are currently being loaded
   * Used to show/hide skeleton loaders for facets
   */
  setStatsLoading(isLoading: boolean): void {
    this.statsLoading.next(isLoading);
  }
  
  /**
   * Observable to track stats loading state
   * Components can subscribe to this to show/hide skeleton loaders
   */
  getStatsLoading(): Observable<boolean> {
    return this.statsLoading.asObservable();
  }

  getResult(): Observable<Result> {
    return this.result.asObservable();
  }
  setCitation(key: number): void {
    this.citation.next(key);
  }

  getCitation(): Observable<number> {
    return this.citation;
  }
  setRemovedFilter(key: any): void {
    this.removedFilter.next(key);
  }

  getRemovedFilter(): Observable<any> {
    return this.removedFilter;
  }
  xmltoJson(xmlStr): any {
    // @ts-ignore
    const convert = require("xml-js");
    let xml = '<?xml version="1.0" encoding="utf-8"?>' + xmlStr;
    xml = convert.xml2json(xml, { compact: false, spaces: 4 });
    return JSON.parse(xml);
  }
}
