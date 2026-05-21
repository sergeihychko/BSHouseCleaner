import {Component, inject} from '@angular/core';
import {TrendsService} from '../services/trends-service';
import {Trend} from '../interface/api-interface';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {TrendingFeed} from '../trending-feed/trending-feed';

@Component({
  selector: 'app-trends',
  imports: [
    PrimeTemplate,
    TableModule,
    TrendingFeed
  ],
  templateUrl: './trends.html',
  styleUrl: './trends.css',
})

export class Trends {

  TrendsService = inject(TrendsService);
  trends!: Trend[]

  ngOnInit() {
    this.TrendsService.trends
  }

}
