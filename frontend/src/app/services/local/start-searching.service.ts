import { Injectable } from "@angular/core";
import { NodeService } from "../remote/node.service";
import { CommunicationService } from "./communication.service";
import { GfbioPreprocessDataService } from "./gfbio-preprocess-data.service";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class StartSearchingService {
  constructor(
    private nodeService: NodeService,
    private communicationService: CommunicationService,
    private gfbioPreprocessData: GfbioPreprocessDataService
  ) {}

  /**
   * Start a search with progressive loading of results and stats
   * 
   * @param searchKey The search keywords
   * @param semantic Whether to use semantic search
   * @param from Pagination start index
   * @param filters Applied filters
   */
  startSearching(searchKey, semantic, from, filters): void {
    let urlTerm: string;
    const urlIndex = environment.context;
    let body: any;
    let key;
    if (semantic === true) {
      key = searchKey;
      urlTerm = environment.semSearchUrl;
    } else {
      key = searchKey.join(" ");
      urlTerm = environment.searchUrl;
    }
    
    // If from is undefined, use the pagination state from the communication service
    // This ensures we're using the correct pagination value when navigation is used
    if (from === undefined) {
      from = this.communicationService.getPagination() || 0;
    }
    
    body = JSON.stringify({
      queryterm: key,
      from,
      size: 10,
      filter: filters,
    });
    
    // Use the new progressive loading approach
    // This will load results quickly, then fetch stats in the background
    this.nodeService.searchResults(
      urlIndex + urlTerm,
      body,
      this.gfbioPreprocessData,
      [semantic]
    );
  }
}
