import {Component, inject} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {FeedSearchBar} from '../feed-search-bar/feed-search-bar';
import {MatToolbar} from '@angular/material/toolbar';
import {MatTooltip} from '@angular/material/tooltip';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {Skeets} from '../interface/api-interface';
import {TrendingFeedService} from '../services/trending-feed-service';

@Component({
  selector: 'app-trending-feed',
  imports: [
    DecimalPipe,
    FeedSearchBar,
    MatToolbar,
    MatTooltip,
    PrimeTemplate,
    TableModule
  ],
  templateUrl: './trending-feed.html',
  styleUrl: './trending-feed.css',
})
export class TrendingFeed {

  skeets!: Skeets[]
  feedtableservice = inject(TrendingFeedService);

  ngOnInit() {
    this.feedtableservice.skeets
    console.log(this.feedtableservice.skeets)
  }

}
