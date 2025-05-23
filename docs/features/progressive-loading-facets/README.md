# Progressive Loading with Facets Skeleton

## Overview

This feature implements a progressive loading approach that separates the fetching of search results from the calculation of facet statistics. This significantly improves perceived performance by displaying search results immediately while showing a skeleton loader for facets until they're fully loaded.

## Problem Statement

In the original implementation, search results and facet statistics were fetched in a single request. As the Elasticsearch index grew larger, the time required to calculate facet statistics increased, causing the entire search results page to be delayed. Users had to wait for both search results and facet calculations to complete before seeing any content.

## Solution

The solution decouples the loading of search results from facet statistics:

1. Search results are fetched and displayed immediately
2. Facet statistics are fetched in the background
3. A skeleton loader is shown while facets are being calculated
4. Once facet stats are loaded, they replace the skeleton loader

## Implementation Details

### Backend Changes

1. **New Endpoints**
   - `/gfbio/search/results` - Returns search results without aggregations
   - `/gfbio/search/stats` - Returns only aggregation stats without search results

2. **Query Utilities**
   - Added `getQueryWithoutAggs()` to build queries without aggregations
   - Added `getStatsOnlyQuery()` to build queries with only aggregations

3. **Service Modifications**
   - Extended `searchService.js` with specialized methods for separate fetching

### Frontend Changes

1. **Progressive Loading Flow**
   - Modified `StartSearchingService` to use the progressive loading approach
   - Added background stats fetching in `NodeService`

2. **State Management**
   - Added stats loading state in `CommunicationService`
   - Implemented proper aggregation processing in background fetching

3. **UI Improvements**
   - Added skeleton loader animation in `filters.component.css`
   - Implemented conditional rendering in filters template
   - Provided visual feedback during facet loading

## Files Changed

### Backend
- `/search/backend/src/controllers/search.controller.js`
- `/search/backend/src/services/search.service.js`
- `/search/backend/src/utils/query.utils.js`
- `/search/backend/src/routes/search.route.js`

### Frontend
- `/search/frontend/src/app/services/remote/node.service.ts`
- `/search/frontend/src/app/services/local/communication.service.ts`
- `/search/frontend/src/app/services/local/start-searching.service.ts`
- `/search/frontend/src/app/filters/filters.component.ts`
- `/search/frontend/src/app/filters/filters.component.html`
- `/search/frontend/src/app/filters/filters.component.css`

## Performance Benefits

- **Faster Initial Results**: Search results appear immediately without waiting for facet calculations
- **Improved User Experience**: Users can start browsing results while facets load in the background
- **Enhanced Responsiveness**: The application feels more responsive, especially with large indices
- **Scalability**: Performance remains acceptable even as the index size grows

## Deployment Notes

### Prerequisites
- No database migrations required
- No additional dependencies needed

### Deployment Steps
1. Deploy backend changes first
2. Deploy frontend changes after confirming backend is functioning correctly
3. Test with a variety of search terms and filter combinations

### Rollback Procedure
If issues arise, revert to the previous version by checking out the main branch and redeploying.

## Testing Notes

The feature has been tested with various search terms and confirmed to work correctly on development environments. Key test scenarios:
- Empty search results
- Large result sets (>1000 items)
- Complex filter combinations
- Slow network conditions
- Concurrent searches

## Screenshots

[Add screenshots showing the skeleton loader and final results]
