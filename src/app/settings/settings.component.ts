import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddCurrency } from '../state/actions/currency.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  addCurrency(payload) {
    this.store.dispatch(new AddCurrency(payload));
  }
}
