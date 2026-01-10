import {Component, inject} from '@angular/core';
import {MatDivider} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {SearchBarService} from '../services/search-bar-service'

@Component({
  selector: 'app-feed-search-overlay',
  imports: [MatDivider, MatListModule, MatIcon, MatIconButton],
  templateUrl: './feed-search-overlay.html',
  styleUrl: './feed-search-overlay.css',
})
export class FeedSearchOverlay {

  searchBarService = inject(SearchBarService);
  recentSearches = this.searchBarService.recentSearches;

  deleteRecentSearches = (searchTerm: string) => {
    this.searchBarService.deleteRecentSearches(searchTerm);
  }

  performSearch(searchTerm: string) {
    this.searchBarService.search(searchTerm);
  }
}
