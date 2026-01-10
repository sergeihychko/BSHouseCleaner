import {computed, inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Followers, Skeets} from './interface/api-interface';
import {HttpClient, HttpParams} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';
import {environment} from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FollowingTableService {
  followsApi= computed(() => `${environment.API_URL}/skeet/follows`);
  private http = inject(HttpClient);

  private followers$: Observable<Followers[]> =
    this.getFollowers()

  public followers = toSignal(this.followers$, {
    initialValue:[]
  });

  getFollowers(): Observable<Followers[]>{
    return this.http.get<Followers[]>(this.followsApi())
  }

}
