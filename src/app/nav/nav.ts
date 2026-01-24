import {Component, inject, NgModule} from '@angular/core';
import {NotificationsService} from '../services/notifications';
import {TableModule} from 'primeng/table';
import {NzMenuDirective, NzMenuItemComponent} from 'ng-zorro-antd/menu';
import {Observable} from 'rxjs';
import {Notificaion} from '../interface/api-interface';
import {AsyncPipe, DecimalPipe} from '@angular/common';
import {FeedNotificationDetail} from '../feed-notification-detail/feed-notification-detail';
import {MatDialog} from '@angular/material/dialog';
import {RouterLinkActive} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-nav',
  imports: [
    TableModule,
    NzMenuItemComponent,
    NzMenuDirective,
    AsyncPipe,
    DecimalPipe,
    RouterLinkActive,
    MatButton
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})

export class Nav {
  notifications!: Observable<Notificaion[]>;
  notificationsService = inject(NotificationsService);

  constructor(public dialog: MatDialog) {
    this.getNotifications()
  }

  openDialog() {
    const dialogRef = this.dialog.open(FeedNotificationDetail);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  title() {
    return "BSHouseCleaner";
  }

  getNotifications(){
    this.notifications = this.notificationsService.getNotifications();
    console.log('notifications : ', this.notifications);
  }

}
