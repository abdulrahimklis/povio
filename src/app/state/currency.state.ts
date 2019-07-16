import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Currency } from '../models/currency.model';
import { AddCurrency, AddOneElement } from './actions/currency.actions';

export class CurrencyStateModel {
    currency: Currency[]
}

@State<CurrencyStateModel>({
    name: 'currency',
    defaults: {
        currency: []
    }
})

export class CurrencyState {

    @Selector()
    static getCurrency(state: CurrencyStateModel) {
        return state.currency
    }

    @Action(AddCurrency)
    add({getState, patchState}: StateContext<CurrencyStateModel>, { payload }: AddCurrency) {
        const state = getState();
        patchState({
            currency: [payload]
        })
    }
}

@State<any>({
    name: 'oneElement',
    defaults: {
        oneElement: []
    }
})

export class OneElement{
    
    @Selector()
    static getOneElement(state: any) {
        return state.oneElement
    }

    @Action(AddOneElement)
    add({getState, patchState}: StateContext<any>, { payload }: AddOneElement) {
        const state = getState();
        console.log("AAA:", payload);
        patchState({
            oneElement: payload
        })
    }
}