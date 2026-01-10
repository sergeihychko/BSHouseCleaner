import {computed, inject, Injectable} from '@angular/core';
import {environment} from '../environments/environment.development';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkeetService {
  deleteApi= computed(() => `${environment.API_URL}/skeet/delete`);
  private http = inject(HttpClient);

  deleteSkeet(uri: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set("uri_id", uri)

    return this.http.get(this.deleteApi(), { params })
  }

}
