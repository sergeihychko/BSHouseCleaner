import {Component, OnInit} from '@angular/core';
import {Notificaion} from '../interface/api-interface';
import {NotificationsService} from '../services/notifications';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-feed-notification-detail',
  imports: [
    PrimeTemplate,
    TableModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogClose,
    MatDialogTitle,
    MatButton
  ],
  templateUrl: './feed-notification-detail.html',
  styleUrl: './feed-notification-detail.css',
})
export class FeedNotificationDetail implements OnInit{
  notifications!: Notificaion[];

  constructor(private notificationsService: NotificationsService) {
  }

  ngOnInit() {
    this.loadNotifications()
  }

  loadNotifications(){
    this.notificationsService.getNotifications().subscribe(notifications =>{
      this.notifications = notifications;
    });
    console.log('notifications : ', this.notifications);
  }

}
