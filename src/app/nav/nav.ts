import {Component, inject} from '@angular/core';
import {NotificationsService} from '../services/notifications';
import {TableModule} from 'primeng/table';
import {NzMenuDirective, NzMenuItemComponent} from 'ng-zorro-antd/menu';
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
  notificationsService = inject(NotificationsService);
  notificationCount: number = 0;

  constructor() {
    console.log("MyService initializing");
    this.getNotifications()
  }

  title() {
    return "BSHouseCleaner";
  }

  getNotifications(){
    console.log('notifications : ', this.notifications);
    this.notifications = this.notificationsService.getNotificaionts();
  }

}
