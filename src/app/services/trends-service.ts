import {computed, inject, Injectable} from '@angular/core';
import {environment} from '../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Trend} from '../interface/api-interface';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class TrendsService {
  trendsApi= computed(() => `${environment.API_URL}/skeet/trends`);
  private http = inject(HttpClient);

  private trends$: Observable<Trend[]> =
    this.getTrends()

  public trends = toSignal(this.trends$, {
    initialValue:[]
  });

  getTrends(): Observable<Trend[]>{
    return this.http.get<Trend[]>(this.trendsApi())
  }
}
