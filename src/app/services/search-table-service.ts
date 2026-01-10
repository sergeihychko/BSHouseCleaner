import {computed, inject, Injectable, InputSignal, Signal} from '@angular/core';
import {environment} from '../../environments/environment.development';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Skeets} from '../interface/api-interface';
import {toSignal} from '@angular/core/rxjs-interop';
import {from, Observable} from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SearchTableService {
  searchApi = computed(() => `${environment.API_URL}/skeet/range`);
  private http = inject(HttpClient);
  datepipe: DatePipe = new DatePipe('en-US')

/*  getSkeets(): Observable<Skeets[]>{
    return this.http.get<Skeets[]>(this.searchApi())
  }*/

  searchSkeet(from_date: InputSignal<Date>, until_date: InputSignal<Date>): Observable<Skeets[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let formatted_from_Date = this.datepipe.transform(from_date.toString(), 'yyyy-MM-dd')
    let formatted_until_Date = this.datepipe.transform(until_date.toString(), 'yyyy-MM-dd')
    let params = new HttpParams().set("from_date", formatted_from_Date ?? "").set("until_date", formatted_until_Date ?? "");
    console.log("from date and to date : " + formatted_from_Date + " : " + formatted_until_Date)

    return this.http.get<Skeets[]>(this.searchApi(), { params })
  }


}
