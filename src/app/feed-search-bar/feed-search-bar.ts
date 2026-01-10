import { Component, inject } from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {OverlayModule} from '@angular/cdk/overlay';
import {SearchBarService} from '../services/search-bar-service';
import {FeedSearchOverlay} from '../feed-search-overlay/feed-search-overlay';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-feed-search-bar',
  imports: [MatIconButton, MatIcon, OverlayModule, FeedSearchOverlay, NgClass],
  templateUrl: './feed-search-bar.html',
  styleUrl: './feed-search-bar.css',
})
export class FeedSearchBar {

  searchBarService = inject(SearchBarService)
  overlayOpen = this.searchBarService.overlayOpen;

  search(searchTerm: string) {
    if (!searchTerm) return;

    this.searchBarService.search(searchTerm);
  }
}
