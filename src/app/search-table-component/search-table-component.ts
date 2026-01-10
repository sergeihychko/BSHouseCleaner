import {Component, inject, input} from '@angular/core';
import {DatePicker} from 'primeng/datepicker';
import {FormsModule} from '@angular/forms';
import {Skeets} from '../interface/api-interface';
import {SearchTableService} from '../services/search-table-service'
import {Observable, Subscription} from 'rxjs';
import {AsyncPipe, DecimalPipe} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {SkeetService} from '../services/skeet-service';

@Component({
  selector: 'app-search-table-component',
  imports: [DatePicker, FormsModule, DecimalPipe, PrimeTemplate, TableModule, AsyncPipe
  ],
  templateUrl: './search-table-component.html',
  styleUrl: './search-table-component.css'
})

export class SearchTableComponent {
  bdate = input.required<Date>();
  edate = input.required<Date>();
  searchTableService = inject(SearchTableService)
  skeetservice = inject(SkeetService);
  skeets$!: Observable<Skeets[]> | null

  ngOnInit() {
  }

  onSubmit(){
    this.skeets$ = this.searchTableService.searchSkeet(this.bdate, this.edate)
  }

  deleteSkeet(uri: string) {
    this.skeetservice.deleteSkeet(uri).subscribe((results) => {
      console.log('Data is received - Result - ', results);
    })
  }

}
