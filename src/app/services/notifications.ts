import {computed, inject, Injectable} from '@angular/core';
import {environment} from '../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notificaion, Skeets} from '../interface/api-interface';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  restApi = computed(() => `${environment.API_URL}/skeet/notifications`);
  private http = inject(HttpClient);

  private notifications$: Observable<Notificaion[]> =
    this.getNotifications();

  public notifications = toSignal(this.notifications$, {
    initialValue:[]
  });

  getNotifications(): Observable<Notificaion[]>{
    return this.http.get<Notificaion[]>(this.restApi())
  }

}
