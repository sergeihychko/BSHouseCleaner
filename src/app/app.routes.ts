import { Routes } from '@angular/router';
import {TableComponent} from './table-component/table-component';
import {DeleteTableComponent} from './delete-table-component/delete-table-component';
import {SearchTableComponent} from './search-table-component/search-table-component';
import {TableService} from './table-service';

export const routes: Routes = [
  {
    path: 'recent',
    component : TableComponent,
    pathMatch: 'full',
  },
  {
    path: 'delete',
    component : DeleteTableComponent,
    pathMatch: 'full',
  },
  {
    path: 'advanced',
    component : SearchTableComponent,
    pathMatch: 'full',
  }
  ,
  {
    path: '**',
    redirectTo: 'recent',
  }
];
