import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { CommunicationService } from "../local/communication.service";
import { GfbioPreprocessDataService } from "../local/gfbio-preprocess-data.service";
import { Result } from "../../models/result/result";
import { environment } from "../../../environments/environment";

// import {gfbioEnvironment} from '../../../environments/gfbio.environment';

@Injectable({
  providedIn: "root",
})
export class NodeService {
  url = environment.apiUrl;
  suggestPanUrl = environment.context + environment.suggestPanUrl;
  suggestTerUrl = environment.context + environment.suggestTerUrl;
  basketURL = environment.context + environment.basketUrl;
  addToBasketUrl = environment.context + environment.addToBasketUrl;
  deleteFromBasketUrl = environment.context + environment.deleteFromBasket;
  deleteAllBasketUrl = environment.context + environment.deleteAllBasket;
  readFromBasketUrl = environment.context + environment.readFromBasketUrl;
  collectionUrl = environment.collections;
  collectionUpdateUrl = environment.collectionsUpdate;

  semantic = false;
  headers: { "Content-Type": string } = { "Content-Type": "application/json" };

  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private communicationService: CommunicationService,
    private gfbioPreprocessData: GfbioPreprocessDataService
  ) {}

  /**
   * Original search method that fetches both results and stats in a single request
   * This is kept for backward compatibility
   */
  search(urlTerm, body, serviceType, otherParameters: Array<any>): any {
    // console.log(body);
    this.spinner.show();
    const headers = this.headers;
    this.http.post<any>(this.url + urlTerm, body, { headers }).subscribe(
      (data) => {
        let results: Result;
        results = serviceType.getResult(data, otherParameters);
        this.communicationService.setResult(results);
        // console.log(results);
        // console.log(data);
        this.spinner.hide();
      },
      (err) => {
        alert(environment.textAlertSemSearchError);
        this.spinner.hide();
      }
    );
  }
  
  /**
   * Fetches only search results without aggregations for faster display
   * Immediately hides the main spinner when results are available
   */
  searchResults(urlTerm, body, serviceType, otherParameters: Array<any>): any {
    this.spinner.show();
    const headers = this.headers;
    this.http.post<any>(this.url + urlTerm + '/results', body, { headers }).subscribe(
      (data) => {
        let results: Result;
        results = serviceType.getResult(data, otherParameters);
        this.communicationService.setResultsOnly(results);
        // Hide main spinner as soon as results are ready
        this.spinner.hide();
        
        // Now fetch stats in the background
        this.fetchStatsInBackground(urlTerm, body);
      },
      (err) => {
        alert(environment.textAlertSemSearchError);
        this.spinner.hide();
      }
    );
  }
  
  /**
   * Fetches only aggregation stats in the background after results are displayed
   * This doesn't show the main spinner since results are already visible
   */
  private fetchStatsInBackground(urlTerm, body): void {
    const headers = this.headers;
    // Indicate that stats are being loaded (without full-page spinner)
    this.communicationService.setStatsLoading(true);
    
    this.http.post<any>(this.url + urlTerm + '/stats', body, { headers }).subscribe(
      (statsData) => {
        // Create a wrapper object that mimics the structure expected by getAggregations
        // Our stats endpoint returns just the aggregations object, but we need to 
        // place it inside an object structure the preprocessor expects
        const wrappedData = {
          aggregations: statsData
        };
        
        // Process the stats through the same service that processes search results
        // to ensure consistent formatting of aggregations
        const processedAggregations = this.gfbioPreprocessData.getAggregations(wrappedData);
        
        // Update the stats in the communication service with properly processed aggregations
        this.communicationService.setStats(processedAggregations);
        this.communicationService.setStatsLoading(false);
      },
      (err) => {
        console.error('Error loading stats:', err);
        this.communicationService.setStatsLoading(false);
      }
    );
  }

  suggestSimple(key): any {
    const body = {
      term: key,
    };
    const headers = this.headers;
    return this.http.post<any>(this.url + this.suggestPanUrl, body, {
      headers,
    });
  }

  suggestTerminology(key): any {
    const body = {
      term: key,
    };
    const headers = this.headers;
    return this.http.post<any>(this.url + this.suggestTerUrl, body, {
      headers,
    });
  }

  addToBasket(itemInDatabase): any {
    return this.http.post<any>(this.url + this.addToBasketUrl, itemInDatabase);
  }

  readFromBasket(userId): any {
    return this.http.get<any>(this.url + this.readFromBasketUrl + userId);
  }

  deleteFromBasket(itemInDatabase): any {
    return this.http.post<any>(
      this.url + this.deleteFromBasketUrl,
      itemInDatabase
    );
  }

  deleteAllBasket(userId): any {
    return this.http.post<any>(this.url + this.deleteAllBasketUrl, { userId });
  }

  basketDownload(baskets): any {
    return this.http.post(this.url + this.basketURL, baskets, {
      responseType: "blob",
    });
  }

  postBasketToCollection(baskets, userId): any {
    const headers = this.headers;
    const body = {
      set: baskets.basket,
      external_user_id: userId,
    };
    return this.http.post<any>(this.url + "/gfbio" + this.collectionUrl, body, {
      headers,
    });
  }

  updateBasketInCollection(baskets, userId, collectionId): any {
    const headers = this.headers;
    const body = {
      set: baskets.basket,
      external_user_id: userId,
      collection_id: collectionId,
    };
    return this.http.post<any>(
      this.url + "/gfbio" + this.collectionUpdateUrl,
      body,
      { headers }
    );
  }

  narrow(id, uri): any {
    const body = {
      id,
      uri,
    };
    const headers = this.headers;
    return this.http.post<any>(this.url + "/gfbio/narrow", body, { headers });
  }

  broad(id, uri): any {
    const body = {
      id,
      uri,
    };
    const headers = this.headers;
    return this.http.post<any>(this.url + "/gfbio/broad", body, { headers });
  }
}
