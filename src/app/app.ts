import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Nav} from './nav/nav';
import {TableComponent} from './table-component/table-component';
import {DeleteTableComponent} from './delete-table-component/delete-table-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, TableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly title = signal('BSHouseCleaner');
  showRecent = true;
}
