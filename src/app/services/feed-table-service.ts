import {computed, inject, Injectable} from '@angular/core';
import {environment} from '../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Skeets} from '../interface/api-interface';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class FeedTableService {
  feedApi= computed(() => `${environment.API_URL}/skeet/timeline`);
  private http = inject(HttpClient);

  private skeets$: Observable<Skeets[]> =
    this.getFeed()

  public skeets = toSignal(this.skeets$, {
    initialValue:[]
  });

  getFeed(): Observable<Skeets[]>{
    return this.http.get<Skeets[]>(this.feedApi())
  }

}
