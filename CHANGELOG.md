# GFBio Search UI Changelog

## v1.1.0 - September 15, 2025

### Added
- Docker Compose configuration for external Elasticsearch deployments in production environments
- Matomo Tag Manager integration for comprehensive user analytics and behavior tracking
- Intelligent stop words filtering to remove common words from highlighted search terms
- Enhanced expanded semantic search terms display with improved spacing and visual design

### Fixed
- Search result highlighting now properly renders HTML tags in both headers and descriptions
- Stop words like "and", "the", "is" no longer appear highlighted in search results
- Improved spacing below expanded terms section to prevent overlap with search results
- Enhanced search result card styling with better rectangular highlighting and proper padding

### Changed
- Enhanced repository structure and security by removing sensitive configuration files
- Improved deployment flexibility with external index support for better scalability
- Consolidated stop words filtering logic for better maintainability and consistent behavior
- Optimized semantic search display for better user comprehension of expanded query terms

## v1.0.0 - May 22, 2025

### Added
- Initial version of the GFBio Search UI
- Angular-based frontend with responsive design
- Node.js backend for API integration
- Search functionality for GFBio data
- Faceted filtering based on various metadata fields
- Detailed view for search results
- Integration with Elasticsearch index
- Support for visualization of spatial data
- Data center designation indicator in search results
- Docker configuration for development and production environments
- Comprehensive documentation
- Progressive loading with facet skeleton UI for improved performance
  - Decoupled search results from facet stats calculation
  - Added skeleton loaders for facets during loading
  - Improved perceived performance for large dataset searches
