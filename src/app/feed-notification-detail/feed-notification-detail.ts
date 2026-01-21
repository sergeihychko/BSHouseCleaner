import {Component, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {Notificaion} from '../interface/api-interface';
import {NotificationsService} from '../services/notifications';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-feed-notification-detail',
  imports: [
    PrimeTemplate,
    TableModule,
    MatDialogActions,
    MatDialogContent,
    AsyncPipe,
    MatDialogClose
  ],
  templateUrl: './feed-notification-detail.html',
  styleUrl: './feed-notification-detail.css',
})
export class FeedNotificationDetail {
  notifications!: Observable<Notificaion[]>;
  notificationsService = inject(NotificationsService);

  constructor() {
    this.getNotifications()
  }

  getNotifications(){
    this.notifications = this.notificationsService.getNotifications();
    console.log('notifications : ', this.notifications);
  }

}
