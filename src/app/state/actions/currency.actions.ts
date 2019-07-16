import { Currency } from '../../models/currency.model'

export class AddCurrency {
  static readonly type = '[Currency] Add Currency';
  constructor(public payload: Currency) {}
}

export class AddOneElement {
  static readonly type = '[OneElement] Add OneElement';
  constructor(public payload: any) { }
}