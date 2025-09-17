import { Component } from '@angular/core';
import {App} from '../app';
import {DecimalPipe} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-nav',
  imports: [
    TableModule
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

  title() {
    return "BSHouseCleaner";
  }
}
