import { Component } from '@angular/core';
import {App} from '../app';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

  title() {
    return "BSHouseCleaner";
  }
}
