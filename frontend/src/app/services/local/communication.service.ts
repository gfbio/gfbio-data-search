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
  private isResultsLoading: BehaviorSubject<boolean>;
  private currentPage: BehaviorSubject<number>;

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
    // @ts-ignore
    this.isResultsLoading = new BehaviorSubject<boolean>(false);
    // @ts-ignore
    this.currentPage = new BehaviorSubject<number>(1);
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

  setResult(key: Result): void {
    this.result.next(key);
    this.setResultsLoading(false);
  }

  setResultsOnly(result: any): void {
    const currentResult = this.result.getValue();
    
    if (currentResult && currentResult.getAggregations) {
      const aggregations = currentResult.getAggregations ? currentResult.getAggregations() : undefined;
      if (aggregations) {
        if (result.setAggregations) {
          result.setAggregations(aggregations);
        }
      }
    }
    
    this.result.next(result);
    this.setResultsLoading(false);
  }
  
  setStats(statsData: any): void {
    const currentResult = this.result.getValue();
    
    if (currentResult && currentResult.setAggregations) {
      currentResult.setAggregations(statsData);
      this.result.next(currentResult);
    }
    this.setStatsLoading(false);
  }
  
  setStatsLoading(isLoading: boolean): void {
    this.statsLoading.next(isLoading);
  }
  
  getStatsLoading(): Observable<boolean> {
    return this.statsLoading.asObservable();
  }

  setResultsLoading(isLoading: boolean): void {
    this.isResultsLoading.next(isLoading);
  }

  getResultsLoading(): Observable<boolean> {
    return this.isResultsLoading.asObservable();
  }
  
  /**
   * Resets pagination to page 1 whenever filters or search criteria change
   * This ensures that when a user applies a filter, they always see the first page of results
   */
  resetPagination(): void {
    this.currentPage.next(1);
    this.pagination = 0; // Set from to 0 (first page)
  }
  
  /**
   * Updates the current page and pagination value
   * This should only be called by explicit pagination interactions
   */
  setCurrentPage(page: number, from: number): void {
    this.currentPage.next(page);
    this.pagination = from;
  }
  
  /**
   * Gets the current page as an observable
   * Components can subscribe to this to stay in sync with the pagination state
   */
  getCurrentPage(): Observable<number> {
    return this.currentPage.asObservable();
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
