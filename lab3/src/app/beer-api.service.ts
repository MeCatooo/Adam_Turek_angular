import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from './beer';

@Injectable({
  providedIn: 'root'
})
export class BeerApiService {

  private list: Observable<Beer> = new Observable<Beer>();

  constructor(private httpClient: HttpClient) { }

  private fetchApi() {
    const url = 'https://api.punkapi.com/v2/beers?page=1&per_page=80';
    this.list = this.httpClient.get<Beer>(url)
  }

  getList(): Observable<Beer> {
    this.fetchApi();
    console.log(this.list);
    return this.list;
  }
}
