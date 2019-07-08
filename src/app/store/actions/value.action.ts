import { createAction, props } from '@ngrx/store';

interface ValueAction {
  type: string;
}

export const USD = createAction( '[USD] Value USD', props<{ USD: string; }>());
export const EUR = createAction( '[EUR] Value EUR', props<{ EUR: string; }>());
export const CNY = createAction( '[CNY] Value CNY', props<{ CNY: string; }>());
