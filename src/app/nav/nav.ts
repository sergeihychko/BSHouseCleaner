import {Component, inject} from '@angular/core';
import {App} from '../app';
import {DecimalPipe} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';
import {NotificationsService} from '../services/notifications';
import {TableModule} from 'primeng/table';
import {NzMenuDirective, NzMenuItemComponent, NzMenuModule} from 'ng-zorro-antd/menu';
import {FeedTableService} from '../services/feed-table-service';
import {Observable} from 'rxjs';
import {Notificaion} from '../interface/api-interface';

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
  notifications!: Observable<Notificaion[]>;
  notificationsservice = inject(NotificationsService);
  notificationcount: number = 0;

  title() {
    return "BSHouseCleaner";
  }

  ngOnInit() {
    this.getNotifications()
  }

  getNotifications(){
    console.log('notifications : ', this.notifications);
    this.notifications = this.notificationsservice.getNotificaionts();
  }

}
