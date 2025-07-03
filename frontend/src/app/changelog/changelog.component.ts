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
