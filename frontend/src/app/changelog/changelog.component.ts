import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * CHANGELOG CONTENT GUIDELINES
 * ============================
 *
 * Rule 1: Maximum 5 bullet points per release
 *         - Forces prioritization of the most important user-facing changes
 *         - Group minor fixes into "Various bug fixes and performance improvements"
 *
 * Rule 2: User-focused language
 *         - Describe WHAT users can do, not HOW it was built
 *         - Good: "Clearer search results with matching terms highlighted"
 *         - Bad: "Implemented HTML-safe highlight rendering in the result component"
 *
 * Rule 3: No internal implementation details
 *         - No technology names (Angular, Keycloak, Elasticsearch, Matomo, Docker, etc.)
 *         - No infrastructure details (CI/CD, GitLab, database queries, caching)
 *         - No security implementation specifics (token refresh, auth context)
 *         - No internal tooling (Makefile, task management, test suites)
 *
 * Rule 4: No DevOps or deployment information
 *         - Users don't need to know about deployments, migrations, or pipelines
 *
 * Rule 5: Combine related items
 *         - Instead of 5 separate bug fixes, use "Various bug fixes and improvements"
 *
 * Entries are ordered newest-first. Keep this in sync with the developer-tier
 * CHANGELOG.md at the repository root (which may carry technical detail).
 */

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
      version: '1.2.0',
      date: 'June 24, 2026',
      changes: [
        'New About page that explains, in plain language, what GFBio Search does and how datasets travel from data centers into your search results',
        'A visual overview showing how biodiversity data from many sources is gathered, harmonised and made searchable in one place',
        'Clearer, plain-language release notes focused on what is new for you',
        'Various bug fixes and performance improvements'
      ]
    },
    {
      version: '1.1.0',
      date: 'September 15, 2025',
      changes: [
        'Clearer search results, with matching terms highlighted accurately in titles and descriptions',
        'Smarter highlighting that ignores common words like "and", "the" and "is", so the terms that matter stand out',
        'The related terms we add to your search are easier to read, with cleaner spacing and layout',
        'Refreshed search result cards for better readability',
        'Various bug fixes and performance improvements'
      ]
    },
    {
      version: '1.0.0',
      date: 'July 3, 2025',
      changes: [
        'Clear distinction between official GFBio Data Centers and other data providers throughout search, each with its own icon',
        'New Data Center filter to focus your results on certified, long-term data centers',
        'Dataset cards now show at a glance when data comes from an official Data Center',
        'Smoother browsing — search results and filters appear with placeholders while they load',
        'Various bug fixes and performance improvements'
      ]
    }
  ];
}
