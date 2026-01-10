import {computed, inject, Injectable} from '@angular/core';
import {environment} from '../../environments/environment.development';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Skeets} from '../interface/api-interface';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  restApi = computed(() => `${environment.API_URL}/skeet/data`);
  private http = inject(HttpClient);

  private skeets$: Observable<Skeets[]> =
    this.getSkeets();

  public skeets = toSignal(this.skeets$, {
    initialValue:[]
  });

  getSkeets(): Observable<Skeets[]>{
    return this.http.get<Skeets[]>(this.restApi())
  }

}
