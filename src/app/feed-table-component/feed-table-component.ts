import {Component, inject} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {Skeets} from '../interface/api-interface';
import {TableService} from '../table-service';
import {SkeetService} from '../skeet-service';
import {FeedTableService} from '../feed-table-service';
import {MatToolbar} from '@angular/material/toolbar';
import {FeedSearchBar} from '../feed-search-bar/feed-search-bar';

@Component({
  selector: 'app-feed-table-component',
  imports: [
    DecimalPipe,
    PrimeTemplate,
    TableModule,
    MatToolbar,
    FeedSearchBar
  ],
  templateUrl: './feed-table-component.html',
  styleUrl: './feed-table-component.css',
})
export class FeedTableComponent {

  skeets!: Skeets[]
  feedtableservice = inject(FeedTableService);

  ngOnInit() {
    this.feedtableservice.skeets
    console.log(this.feedtableservice.skeets)
  }

}
