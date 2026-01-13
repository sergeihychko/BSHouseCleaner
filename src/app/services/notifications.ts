import {computed, inject, Injectable} from '@angular/core';
import {environment} from '../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notificaion} from '../interface/api-interface';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  restApi = computed(() => `${environment.API_URL}/skeet/notificaitons`);
  private http = inject(HttpClient);

  getNotificaionts(): Observable<Notificaion[]>{
    return this.http.get<Notificaion[]>(this.restApi())
  }

}
