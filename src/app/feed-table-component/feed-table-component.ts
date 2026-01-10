import {Component, inject} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {Skeets} from '../interface/api-interface';
import {TableService} from '../services/table-service';
import {SkeetService} from '../services/skeet-service';
import {FeedTableService} from '../services/feed-table-service';
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

  // applyFilter(searchText: string) {
  //   if (!searchText) return
  //   searchText = searchText.toLowerCase();
  //   this.filteredSkeets = this.skeets.filter( skeets => {
  //     return skeets.text.toLowerCase().includes(searchText);
  //   });
  // }

}
