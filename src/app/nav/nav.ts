import { Component } from '@angular/core';
import {App} from '../app';
import {DecimalPipe} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {NzMenuDirective, NzMenuItemComponent, NzMenuModule} from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-nav',
  imports: [
    TableModule,
    NzMenuItemComponent,
    NzMenuDirective
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

  title() {
    return "BSHouseCleaner";
  }
}
