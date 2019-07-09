import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private coinData: any;

  constructor(
    private http: HttpClient,
  ) {}

  url = (numOf: number, currency: string) => `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${numOf || 100}&convert=${currency || 'USD'}`;

   getData(numOf: number, currency: string) {
     return new Promise((resolve, reject) => {
       this.http.get(this.url(numOf, currency),{
         headers: new HttpHeaders({
           "X-CMC_PRO_API_KEY": "7c1ac462-bc7f-4b52-9f8f-47604d5d6820",
           "Content-Type": "application/json",
         })
       }).subscribe((res: any) => {
         resolve(res.data)
       })
     })
  }
}
