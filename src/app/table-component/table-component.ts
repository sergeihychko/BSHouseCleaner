import {Component, inject} from '@angular/core';
import {TableService} from '../table-service';
import {Skeets} from '../interface/api-interface';
import {toSignal} from '@angular/core/rxjs-interop';
import {TableModule} from 'primeng/table';
import {DecimalPipe} from '@angular/common';
import {SkeetService} from '../skeet-service';

@Component({
  selector: 'app-table-component',
  imports: [
    TableModule,
    DecimalPipe
  ],
  templateUrl: './table-component.html',
  styleUrl: './table-component.css'
})
export class TableComponent {

  skeets!: Skeets[]
  tableservice = inject(TableService);
  skeetservice = inject(SkeetService);

  ngOnInit() {
    this.tableservice.skeets
    console.log(this.tableservice.skeets)
  }

  deleteSkeet(uri: string) {
    this.skeetservice.deleteSkeet(uri).subscribe((results) => {
      console.log('Data is received - Result - ', results);
    })
  }


}
