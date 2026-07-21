import {computed, inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment.development';
import {Observable} from 'rxjs';
import {Skeets} from '../interface/api-interface';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})

export class TrendingFeedService {
  feedApi= computed(() => `${environment.API_URL}/skeet/trend`);
  private http = inject(HttpClient);
  private id: string = "9999999"

  private skeets$: Observable<Skeets[]> =
    this.getFeed()
    // this.getFeed(id)

  public skeets = toSignal(this.skeets$, {
    initialValue:[]
  });

  // getFeed(id: string): Observable<Skeets[]>{
  getFeed(): Observable<Skeets[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set("id", this.id)

    return this.http.get<Skeets[]>(this.feedApi(), { params })
  }
}
