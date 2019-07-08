import { createReducer, on } from '@ngrx/store';
import { EUR, CNY, USD } from "../actions/value.action";

export const initialState = 0;

export const valueReducer = createReducer(initialState,
  on(USD, state => state * 1.000),
  on(EUR, state => state * 1.126),
  on(CNY, state => state * 0.145),
);
