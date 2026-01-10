import {computed, inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Followers, Skeets} from './interface/api-interface';
import {HttpClient, HttpParams} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';
import {environment} from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FollowedTableService {
  followedApi= computed(() => `${environment.API_URL}/skeet/followed`);
  private http = inject(HttpClient);

  private followerd$: Observable<Followers[]> =
    this.getFollowed()

  public followed = toSignal(this.followerd$, {
    initialValue:[]
  });

  getFollowed(): Observable<Followers[]>{
    return this.http.get<Followers[]>(this.followedApi())
  }

}
