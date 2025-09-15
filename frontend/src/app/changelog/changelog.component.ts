import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})
export class ChangelogComponent implements OnInit {
  ngOnInit(): void {
    // Initialize component
  }
  
  changelogEntries: ChangelogEntry[] = [
    {
      version: '1.1.0',
      date: '2025-09-15',
      changes: [
        // Infrastructure and Analytics
        'Added Docker Compose configuration for external Elasticsearch deployments in production environments',
        'Integrated Matomo Tag Manager for comprehensive user analytics and behavior tracking',
        'Enhanced repository structure and security by removing sensitive configuration files',
        'Improved deployment flexibility with external index support for better scalability',
        
        // Search Experience Enhancements  
        'Fixed search result highlighting to properly render HTML tags in both headers and descriptions',
        'Implemented intelligent stop words filtering to remove common words like "and", "the", "is" from highlighted search terms',
        'Enhanced expanded semantic search terms display with improved spacing and visual design',
        'Improved search result card styling with better rectangular highlighting and proper padding',
        'Consolidated stop words filtering logic for better maintainability and consistent behavior',
        
        // User Interface Improvements
        'Added proper spacing below expanded terms section to prevent overlap with search results',
        'Enhanced visual distinction between meaningful search terms and common stop words',
        'Improved readability of search highlights with rounded corners and consistent styling',
        'Optimized semantic search display for better user comprehension of expanded query terms'
      ]
    },
    {
      version: '1.0.0',
      date: '2025-07-03',
      changes: [
        // Technical changes
        'Introduced clear distinction between Data Centers and Data Providers throughout the search system',
        'Added new Data Center filter category with dedicated visualization in the search sidebar',
        'Updated Elasticsearch index and backend to support efficient Data Center filtering',
        'Implemented new iconography for Data Centers (storage) and Data Providers (business)',
        'Enhanced dataset result cards and metadata display to highlight Data Center status',
        'Implemented progressive loading with skeleton UI for enhanced user experience',
        'Added skeleton loaders for search results to improve perceived performance',
        'Enhanced pagination behavior with better loading states',
        'Improved GBIF citation handling with proper download DOI formatting',
        'Fixed date range filtering for collection dates (minDateTime/maxDateTime)',
        
        // Stakeholder-focused entries
        'Enhanced visibility for official GFBio Data Centers in response to their feedback for clearer institutional recognition',
        'Improved researcher experience by enabling direct filtering for datasets from certified Data Centers',
        'Aligned with GFBio strategic initiative to highlight our Data Center network and its quality standards',
        'Streamlined data discovery process for users seeking highly curated, long-term preserved datasets',
        'No action required from Data Providers - categorization is managed by GFBio administrators',
        'Integrated complete repository history with local progressive loading development',
        'Established unified version alignment across all search components',
        'Created comprehensive project documentation and development guidelines'
      ]
    }
  ];
}
