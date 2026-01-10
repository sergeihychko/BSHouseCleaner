import {Component, inject} from '@angular/core';
import {DecimalPipe} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {Skeets} from '../interface/api-interface';
import {DeleteTableService} from '../services/delete-table-service';

@Component({
  selector: 'app-delete-table-component',
    imports: [
        DecimalPipe,
        PrimeTemplate,
        TableModule
    ],
  templateUrl: './delete-table-component.html',
  styleUrl: './delete-table-component.css'
})
export class DeleteTableComponent {

  skeets!: Skeets[]

  tableservice = inject(DeleteTableService);

  ngOnInit() {
    this.tableservice.skeets
    console.log(this.tableservice.skeets)
  }
}

