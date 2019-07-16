import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Store, Select } from '@ngxs/store';
import { Currency } from '../models/currency.model'
import { AddCurrency } from '../state/actions/currency.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  currency$: Observable<any>;
  private coinData: any;

  constructor(
    private http: HttpClient,
    private store: Store
  ) {
    this.currency$ = this.store.select(state => state.currency.currency)
  }

  url = (numOf: number, currency: any) => `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${numOf || 100}&convert=${currency || 'USD'}`;

   getData(numOf: number, currency: string) {
     return new Promise(async (resolve, reject) => {
      this.http.get(this.url(numOf, currency || 'USD'),{
        headers: new HttpHeaders({
          "X-CMC_PRO_API_KEY": "7c1ac462-bc7f-4b52-9f8f-47604d5d6820",
          "Content-Type": "application/json",
        })
      }).subscribe((res: any) => {
        resolve(res.data)
      }) 
      //  console.log("Test123",this.currency$);
      //  this.currency$.subscribe(res => {
      //    console.log("Response consoles", res)
      //    if(res.length != 0 ) 
      //    this.http.get(this.url(numOf, res[res.length-1] || 'USD'),{
      //     headers: new HttpHeaders({
      //       "X-CMC_PRO_API_KEY": "7c1ac462-bc7f-4b52-9f8f-47604d5d6820",
      //       "Content-Type": "application/json",
      //     })
      //   }).subscribe((res: any) => {
      //     resolve(res.data)
      //   })
      //  })
       
     })
  }
}
