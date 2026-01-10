import { Routes } from '@angular/router';
import {TableComponent} from './table-component/table-component';
import {DeleteTableComponent} from './delete-table-component/delete-table-component';
import {SearchTableComponent} from './search-table-component/search-table-component';
import {FollowingTableComponent} from './following-table-component/following-table-component';
import {FollowedTableComponent} from './followed-table-component/followed-table-component';
import {FeedTableComponent} from './feed-table-component/feed-table-component';

export const routes: Routes = [
  {
    path: 'recent',
    component : TableComponent,
    pathMatch: 'full',
  },
  {
    path: 'feed',
    component : FeedTableComponent,
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
  },
  {
    path: 'followers',
    component: FollowingTableComponent,
    pathMatch: 'full',
  },
  {
    path: 'followed',
    component: FollowedTableComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'recent',
  }
];
