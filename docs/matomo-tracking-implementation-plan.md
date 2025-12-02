# Matomo Tracking Implementation Plan

## Overview

This document outlines the implementation plan for adding Matomo analytics tracking to the GFBio Search UI. The work is tracked in three Jira tickets:

| Ticket | Summary | Priority | Dependencies |
|--------|---------|----------|--------------|
| **DASS-3089** | Set up Matomo tracking infrastructure | Foundation | None |
| **DASS-3090** | Implement search behavior tracking | Priority 1 | DASS-3089 |
| **DASS-3091** | Implement result interaction tracking | Priority 2 | DASS-3089 |

---

## Configuration

### Matomo Instance Details

| Setting | Value |
|---------|-------|
| **Site ID** | 5 |
| **Tracking URL** | https://analytics.gfbio.org/ |
| **Container ID** | NcW8cPSS |
| **Site Search** | Enabled (parameters: `q`, `s`, `search`, `query`, `searchword`, `k`, `keyword`, `keywords`) |

### Architecture Decisions

1. **Tracking Method:** Direct `_paq` push (not Tag Manager `_mtm`)
   - More control over tracking logic
   - All logic contained in Angular code
   - Simpler debugging and maintenance

2. **User Type Detection:** Use Keycloak authentication state
   - `authenticated` for logged-in users
   - `anonymous` for guests

3. **Environment:** Production only
   - Tracking disabled in development to avoid polluting data
   - Controlled via environment configuration flag

---

## Custom Dimensions

### Action Scope Dimensions (IDs 1-5)

| ID | Name | Values | Purpose |
|----|------|--------|---------|
| 1 | Search Type | `regular`, `semantic` | Differentiate search methods |
| 2 | Result Count | Number | Results returned by search |
| 3 | Active Filters | Number | Count of applied facet filters |
| 4 | Result Position | Number (1-indexed) | Position of clicked result |
| 5 | Dataset Type | String | Type of dataset (e.g., `ABCD_Dataset`) |

### Visit Scope Dimensions (IDs 6-7)

| ID | Name | Values | Purpose |
|----|------|--------|---------|
| 6 | User Type | `authenticated`, `anonymous` | User authentication status |
| 7 | Basket Size | Number | Items in user's basket |

> **Note:** All 5 Action dimension slots are used. 3 Visit dimension slots remain available for future use.

---

## Phase 1: DASS-3089 - Infrastructure Setup

### 1.1 Create MatomoService

**File:** `frontend/src/app/services/local/matomo.service.ts`

```typescript
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { KeycloakService } from 'keycloak-angular';

declare var _paq: any[];

@Injectable({
  providedIn: 'root'
})
export class MatomoService {

  private enabled: boolean;
  private previousSearchQuery: string = '';

  constructor(private keycloakService: KeycloakService) {
    this.enabled = environment.matomo?.enabled ?? false;
  }

  // ============ Core Methods ============

  private push(args: any[]): void {
    if (!this.enabled) return;
    try {
      _paq = _paq || [];
      _paq.push(args);
    } catch (e) {
      console.warn('Matomo tracking error:', e);
    }
  }

  // ============ Custom Dimensions ============
  // Action scope: 1-5, Visit scope: 1-2

  setSearchType(type: 'regular' | 'semantic'): void {
    this.push(['setCustomDimension', 1, type]);
  }

  setResultCount(count: number): void {
    this.push(['setCustomDimension', 2, count.toString()]);
  }

  setActiveFilters(count: number): void {
    this.push(['setCustomDimension', 3, count.toString()]);
  }

  setResultPosition(position: number): void {
    this.push(['setCustomDimension', 4, position.toString()]);
  }

  setDatasetType(type: string): void {
    this.push(['setCustomDimension', 5, type]);
  }

  async setUserType(): Promise<void> {
    const isAuthenticated = await this.keycloakService.isLoggedIn();
    // Visit scope dimension ID 6
    this.push(['setCustomDimension', 6, isAuthenticated ? 'authenticated' : 'anonymous']);
  }

  setBasketSize(size: number): void {
    // Visit scope dimension ID 7
    this.push(['setCustomDimension', 7, size.toString()]);
  }

  // ============ Site Search ============

  trackSiteSearch(query: string, category: string, resultCount: number): void {
    this.push(['trackSiteSearch', query, category, resultCount]);
  }

  // ============ Event Tracking ============

  trackEvent(category: string, action: string, name?: string, value?: number): void {
    const args: any[] = ['trackEvent', category, action];
    if (name !== undefined) args.push(name);
    if (value !== undefined) args.push(value);
    this.push(args);
  }

  // ============ Search Tracking (DASS-3090) ============

  trackSearch(query: string, isSemanticSearch: boolean, resultCount: number): void {
    const searchType = isSemanticSearch ? 'semantic' : 'regular';

    // Set custom dimensions
    this.setSearchType(searchType);
    this.setResultCount(resultCount);

    // Track as site search
    this.trackSiteSearch(query, searchType, resultCount);

    // Track as event for detailed analysis
    this.trackEvent('Search',
      isSemanticSearch ? 'Semantic Search' : 'Regular Search',
      query,
      resultCount
    );

    // Track zero results
    if (resultCount === 0) {
      this.trackEvent('Search', 'Zero Results', query);
    }

    // Track query refinement
    if (this.previousSearchQuery && this.previousSearchQuery !== query) {
      this.trackEvent('Search', 'Query Refined',
        `${this.previousSearchQuery} -> ${query}`);
    }

    this.previousSearchQuery = query;
  }

  trackSuggestionSelected(suggestion: string): void {
    this.trackEvent('Search', 'Suggestion Selected', suggestion);
  }

  // ============ Result Tracking (DASS-3091) ============

  trackViewMore(title: string, position: number, datasetType?: string): void {
    this.setResultPosition(position);
    if (datasetType) this.setDatasetType(datasetType);
    this.trackEvent('Result', 'View More', title, position);
  }

  trackCitationView(title: string, position: number): void {
    this.setResultPosition(position);
    this.trackEvent('Result', 'Citation View', title, position);
  }

  trackDownload(title: string, position: number, datasetType?: string): void {
    this.setResultPosition(position);
    if (datasetType) this.setDatasetType(datasetType);
    this.trackEvent('Result', 'Download', title, position);
  }

  trackBasketAction(action: 'Add' | 'Remove', title: string, position: number): void {
    this.setResultPosition(position);
    this.trackEvent('Basket', action, title, position);
  }

  // ============ Filter Tracking ============

  trackFilterApplied(filterCategory: string, filterValue: string): void {
    this.trackEvent('Filter', 'Applied', `${filterCategory}: ${filterValue}`);
  }

  trackFilterRemoved(filterCategory: string, filterValue: string): void {
    this.trackEvent('Filter', 'Removed', `${filterCategory}: ${filterValue}`);
  }

  trackFiltersCleared(count: number): void {
    this.trackEvent('Filter', 'Cleared All', undefined, count);
  }

  // ============ Pagination Tracking ============

  trackPagination(page: number, totalResults: number): void {
    this.trackEvent('Pagination', 'Page Changed', undefined, page);
  }
}
```

### 1.2 Environment Configuration

**File:** `frontend/src/environments/environment.ts` (development)

```typescript
export const environment = {
  // ... existing config
  matomo: {
    siteId: 5,
    trackerUrl: 'https://analytics.gfbio.org/',
    enabled: false  // Disabled in development
  }
};
```

**File:** `frontend/src/environments/environment.prod.ts` (production)

```typescript
export const environment = {
  // ... existing config
  matomo: {
    siteId: 5,
    trackerUrl: 'https://analytics.gfbio.org/',
    enabled: true  // Enabled in production
  }
};
```

---

## Phase 2: DASS-3090 - Search Behavior Tracking

### Implementation in search-input.component.ts

```typescript
import { MatomoService } from '../services/local/matomo.service';

// In constructor
constructor(
  // ... existing dependencies
  private matomoService: MatomoService
) {}

// Modify onSearch()
onSearch(): void {
  this.semanticValue = false;
  if (this.checkFormat(this.searchKey)) {
    this.communicationService.resetPagination();
    this.startSearching(false);
  } else {
    this.alertSearch = true;
  }
}

// Modify semantic()
semantic(): void {
  this.semanticValue = true;
  if (this.checkFormat(this.searchKey)) {
    this.communicationService.resetPagination();
    this.startSearching(true);
  } else {
    this.alertSemanticSearch = true;
  }
}

// Modify onWindowSuggestKey()
onWindowSuggestKey(value): void {
  // ... existing logic
  this.matomoService.trackSuggestionSelected(value);
}
```

### Tracking Result Count

Subscribe to results in the component or use a callback pattern:

```typescript
// In gfbio.component.ts or via CommunicationService subscription
this.communicationService.getResult().subscribe(result => {
  if (result) {
    const resultCount = result.getTotalNumber();
    this.matomoService.trackSearch(
      this.searchKey[0],  // query
      this.semantic,       // isSemanticSearch
      resultCount
    );
  }
});
```

---

## Phase 3: DASS-3091 - Result Interaction Tracking

### Implementation in result-item.component.ts

```typescript
import { MatomoService } from '../../services/local/matomo.service';

// In constructor
constructor(
  // ... existing dependencies
  private matomoService: MatomoService
) {}

// Add tracking methods
trackViewMore(): void {
  const position = this.itemId + 1;  // Convert to 1-indexed
  const title = this.item.getTitle();
  const type = this.item.getType();
  this.matomoService.trackViewMore(title, position, type);
}

trackDownload(): void {
  const position = this.itemId + 1;
  const title = this.item.getTitle();
  const type = this.item.getType();
  this.matomoService.trackDownload(title, position, type);
}

// Modify openDialog()
openDialog(i): void {
  const position = i + 1;
  const title = this.item.getTitle();
  this.matomoService.trackCitationView(title, position);

  // ... existing dialog logic
  this.dialog.open(CitationComponent, dialogConfig);
  this.communicationService.setCitation(i);
}

// Modify toggleCheckbox()
toggleCheckbox(key, value): void {
  const position = key + 1;
  const title = this.item.getTitle();
  const isAdding = !this.item.getCheckbox();

  this.matomoService.trackBasketAction(
    isAdding ? 'Add' : 'Remove',
    title,
    position
  );

  // ... existing checkbox logic
}
```

### Template Changes in result-item.component.html

```html
<!-- View More button -->
<a (click)="trackViewMore()"
   href="{{ item.getTitleUrl() }}"
   target="_blank"
   class="btn btn-outline-secondary">
  View More
</a>

<!-- Download button -->
<a (click)="trackDownload()"
   [href]="item.getLinkage().getData()"
   download
   class="btn btn-outline-secondary">
  Download
</a>
```

---

## Event Reference

### Search Events (DASS-3090)

| Category | Action | Name | Value |
|----------|--------|------|-------|
| Search | Regular Search | query | resultCount |
| Search | Semantic Search | query | resultCount |
| Search | Zero Results | query | - |
| Search | Query Refined | "prev -> new" | - |
| Search | Suggestion Selected | suggestion | - |

### Result Events (DASS-3091)

| Category | Action | Name | Value |
|----------|--------|------|-------|
| Result | View More | datasetTitle | position |
| Result | Citation View | datasetTitle | position |
| Result | Download | datasetTitle | position |
| Basket | Add | datasetTitle | position |
| Basket | Remove | datasetTitle | position |

### Filter Events (Optional Enhancement)

| Category | Action | Name | Value |
|----------|--------|------|-------|
| Filter | Applied | "category: value" | - |
| Filter | Removed | "category: value" | - |
| Filter | Cleared All | - | count |

### Pagination Events (Optional Enhancement)

| Category | Action | Name | Value |
|----------|--------|------|-------|
| Pagination | Page Changed | - | pageNumber |

---

## Testing Checklist

### DASS-3089 Infrastructure
- [ ] MatomoService created and injectable
- [ ] Environment configuration in place
- [ ] Tracking disabled in development
- [ ] Custom dimensions configured in Matomo
- [ ] Test event visible in Matomo Real-time dashboard

### DASS-3090 Search Tracking
- [ ] Regular search tracked with query and result count
- [ ] Semantic search tracked with different category
- [ ] Zero-result searches identified
- [ ] Query refinement patterns captured
- [ ] Suggestion selection tracked

### DASS-3091 Result Tracking
- [ ] View More clicks tracked with position
- [ ] Citation dialog opens tracked
- [ ] Download clicks tracked
- [ ] Basket add/remove tracked
- [ ] Result position included in all events

---

## Verification in Matomo

1. Open Matomo at https://analytics.gfbio.org/
2. Navigate to **Visitors > Real-time**
3. Perform test actions on search.gfbio.org
4. Verify events appear in real-time log
5. Check **Behaviour > Events** for event categorization
6. Check **Behaviour > Site Search** for search tracking

---

## Files Modified

| File | Changes |
|------|---------|
| `services/local/matomo.service.ts` | **NEW** - Complete tracking service with custom dimension support |
| `environments/environment.ts` | Add matomo config (disabled for dev) |
| `environments/environment.production.ts` | Add matomo config (enabled), fixed `production: true` |
| `environments/environment.staging.ts` | Add matomo config (disabled for staging) |
| `search-input/search-input.component.ts` | Add MatomoService, track suggestion selection |
| `gfbio/gfbio.component.ts` | Add MatomoService, track searches with result count |
| `search-result/result-item/result-item.component.ts` | Add tracking for View More, Download, Citation, Basket |
| `search-result/result-item/result-item.component.html` | Add click handlers for View More and Download |

---

## Implementation Status

### Completed (2025-12-02)

- [x] **DASS-3089**: MatomoService created with all tracking methods
- [x] **DASS-3089**: Custom dimensions configured in Matomo (IDs 1-5 action, 6-7 visit)
- [x] **DASS-3089**: Environment configuration added to all 3 environment files
- [x] **DASS-3090**: Search tracking implemented (regular, semantic, zero results, query refinement)
- [x] **DASS-3090**: Suggestion selection tracking implemented
- [x] **DASS-3091**: View More click tracking with position and dataset type
- [x] **DASS-3091**: Citation dialog tracking with position
- [x] **DASS-3091**: Download button tracking with position and dataset type
- [x] **DASS-3091**: Basket add/remove tracking with position

### Pending Verification

- [ ] Verify events appear in Matomo Real-time dashboard (production only)
- [ ] Confirm Site Search reports populate correctly
- [ ] Validate custom dimension data in Matomo reports

---

## Notes

- All tracking is async to prevent UI blocking
- Errors in tracking are caught and logged, never breaking the UI
- Position values are 1-indexed for human readability in reports
- Custom dimensions must be created in Matomo Admin before use
- Tracking is disabled in development and staging environments
