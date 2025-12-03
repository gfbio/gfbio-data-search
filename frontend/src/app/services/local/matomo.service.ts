import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { KeycloakService } from 'keycloak-angular';

declare var _paq: any[];

/**
 * Custom Dimension IDs configured in Matomo (analytics.gfbio.org, Site ID: 5)
 *
 * Action Scope (set before each event):
 *   1 = Search Type (regular/semantic)
 *   2 = Result Count
 *   3 = Active Filters
 *   4 = Result Position
 *   5 = Dataset Type
 *
 * Visit Scope (persists for session):
 *   6 = User Type (authenticated/anonymous)
 *   7 = Basket Size
 */
enum CustomDimension {
  SEARCH_TYPE = 1,
  RESULT_COUNT = 2,
  ACTIVE_FILTERS = 3,
  RESULT_POSITION = 4,
  DATASET_TYPE = 5,
  USER_TYPE = 6,
  BASKET_SIZE = 7
}

@Injectable({
  providedIn: 'root'
})
export class MatomoService {

  private enabled: boolean;
  private previousSearchQuery: string = '';

  constructor(private keycloakService: KeycloakService) {
    this.enabled = environment.matomo?.enabled ?? false;

    if (this.enabled) {
      this.initializeUserType();
    }
  }

  // ============ Core Methods ============

  /**
   * Push tracking call to Matomo queue
   * Wrapped in try-catch to prevent tracking errors from breaking the UI
   */
  private push(args: any[]): void {
    if (!this.enabled) return;

    try {
      if (typeof _paq !== 'undefined') {
        _paq.push(args);
      }
    } catch (e) {
      console.warn('Matomo tracking error:', e);
    }
  }

  /**
   * Initialize user type dimension on service creation
   */
  private async initializeUserType(): Promise<void> {
    try {
      const isAuthenticated = await this.keycloakService.isLoggedIn();
      this.push(['setCustomDimension', CustomDimension.USER_TYPE,
        isAuthenticated ? 'authenticated' : 'anonymous']);
    } catch (e) {
      // Keycloak might not be initialized yet, set as anonymous
      this.push(['setCustomDimension', CustomDimension.USER_TYPE, 'anonymous']);
    }
  }

  // ============ Custom Dimensions ============

  setSearchType(type: 'regular' | 'semantic'): void {
    this.push(['setCustomDimension', CustomDimension.SEARCH_TYPE, type]);
  }

  setResultCount(count: number): void {
    this.push(['setCustomDimension', CustomDimension.RESULT_COUNT, count.toString()]);
  }

  setActiveFilters(count: number): void {
    this.push(['setCustomDimension', CustomDimension.ACTIVE_FILTERS, count.toString()]);
  }

  setResultPosition(position: number): void {
    this.push(['setCustomDimension', CustomDimension.RESULT_POSITION, position.toString()]);
  }

  setDatasetType(type: string): void {
    this.push(['setCustomDimension', CustomDimension.DATASET_TYPE, type]);
  }

  setBasketSize(size: number): void {
    this.push(['setCustomDimension', CustomDimension.BASKET_SIZE, size.toString()]);
  }

  // ============ Site Search ============

  /**
   * Track site search using Matomo's built-in site search tracking
   * This populates the Behaviour > Site Search reports
   */
  trackSiteSearch(query: string, category: string, resultCount: number): void {
    this.push(['trackSiteSearch', query, category, resultCount]);
  }

  // ============ Event Tracking ============

  /**
   * Track a custom event
   * @param category - Event category (e.g., 'Search', 'Result', 'Basket')
   * @param action - Event action (e.g., 'Regular Search', 'View More')
   * @param name - Optional event name (e.g., search query, dataset title)
   * @param value - Optional numeric value (e.g., result count, position)
   */
  trackEvent(category: string, action: string, name?: string, value?: number): void {
    const args: any[] = ['trackEvent', category, action];
    if (name !== undefined) args.push(name);
    if (value !== undefined) args.push(value);
    this.push(args);
  }

  // ============ Search Tracking (DASS-3090) ============

  /**
   * Track a search execution with all relevant metadata
   * Call this after search results are received to include result count
   */
  trackSearch(query: string, isSemanticSearch: boolean, resultCount: number, filterCount: number = 0): void {
    const searchType = isSemanticSearch ? 'semantic' : 'regular';

    // Set custom dimensions before tracking
    this.setSearchType(searchType);
    this.setResultCount(resultCount);
    this.setActiveFilters(filterCount);

    // Track as site search (populates Site Search reports)
    this.trackSiteSearch(query, searchType, resultCount);

    // Track as event for detailed analysis
    this.trackEvent('Search',
      isSemanticSearch ? 'Semantic Search' : 'Regular Search',
      query,
      resultCount
    );

    // Track zero-result searches specifically for improvement opportunities
    if (resultCount === 0) {
      this.trackEvent('Search', 'Zero Results', query);
    }

    // Track query refinement pattern
    if (this.previousSearchQuery &&
        this.previousSearchQuery !== query &&
        this.previousSearchQuery.trim() !== '') {
      this.trackEvent('Search', 'Query Refined',
        `${this.previousSearchQuery} -> ${query}`);
    }

    this.previousSearchQuery = query;
  }

  /**
   * Track when a user selects a search suggestion
   */
  trackSuggestionSelected(suggestion: string): void {
    this.trackEvent('Search', 'Suggestion Selected', suggestion);
  }

  // ============ Result Tracking (DASS-3091) ============

  /**
   * Track "View More" button click
   * @param title - Dataset title
   * @param position - 1-indexed position in search results
   * @param datasetType - Type of dataset (optional)
   */
  trackViewMore(title: string, position: number, datasetType?: string): void {
    this.setResultPosition(position);
    if (datasetType) {
      this.setDatasetType(datasetType);
    }
    this.trackEvent('Result', 'View More', title, position);
  }

  /**
   * Track citation dialog open
   * @param title - Dataset title
   * @param position - 1-indexed position in search results
   */
  trackCitationView(title: string, position: number): void {
    this.setResultPosition(position);
    this.trackEvent('Result', 'Citation View', title, position);
  }

  /**
   * Track download button click
   * @param title - Dataset title
   * @param position - 1-indexed position in search results
   * @param datasetType - Type of dataset (optional)
   */
  trackDownload(title: string, position: number, datasetType?: string): void {
    this.setResultPosition(position);
    if (datasetType) {
      this.setDatasetType(datasetType);
    }
    this.trackEvent('Result', 'Download', title, position);
  }

  /**
   * Track basket add/remove action
   * @param action - 'Add' or 'Remove'
   * @param title - Dataset title
   * @param position - 1-indexed position in search results
   */
  trackBasketAction(action: 'Add' | 'Remove', title: string, position: number): void {
    this.setResultPosition(position);
    this.trackEvent('Basket', action, title, position);
  }

  // ============ Filter Tracking (Optional Enhancement) ============

  /**
   * Track when a filter is applied
   */
  trackFilterApplied(filterCategory: string, filterValue: string): void {
    this.trackEvent('Filter', 'Applied', `${filterCategory}: ${filterValue}`);
  }

  /**
   * Track when a filter is removed
   */
  trackFilterRemoved(filterCategory: string, filterValue: string): void {
    this.trackEvent('Filter', 'Removed', `${filterCategory}: ${filterValue}`);
  }

  /**
   * Track when all filters are cleared
   */
  trackFiltersCleared(count: number): void {
    this.trackEvent('Filter', 'Cleared All', undefined, count);
  }

  // ============ Pagination Tracking (Optional Enhancement) ============

  /**
   * Track pagination page change
   */
  trackPagination(page: number): void {
    this.trackEvent('Pagination', 'Page Changed', undefined, page);
  }
}
