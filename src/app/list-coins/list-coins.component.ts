import { Component, OnInit } from '@angular/core';
import { GetDataService } from "../services/get-data.service";
import { Location } from '@angular/common';

import { Store, Select } from '@ngxs/store';
import { Currency } from '../models/currency.model'
import { AddCurrency, AddOneElement } from '../state/actions/currency.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.component.html',
  styleUrls: ['./list-coins.component.css']
})
export class ListCoinsComponent implements OnInit {
  coins: any;
  currency$: Observable<any>;
  variable: any;
  
  constructor(
    private store: Store,
    public get: GetDataService,
    private location: Location
  )
  {
    this.currency$ = this.store.select(state => state.currency.currency)
    this.currency$.subscribe(async (res) => {
      const type = res.length > 0 ? res[res.length - 1]: 'USD'
      const response = await this.get.getData(100, type);
      this.coins = (response as any[])
      .map(t => ({ ...t, quote: { ...t.quote, currentCurrency: t.quote[type] } }));
      
    })

  }

  clickOneElement(payload) {
    this.store.dispatch(new AddOneElement(payload));
  }

  async ngOnInit() {
    // this.coins = await this.get.getData(100, 'USD');
  }

}
