import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddCurrency } from '../state/actions/currency.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  addCurrency(payload) {
    this.store.dispatch(new AddCurrency(payload));
  }

  refresh() {
    location.reload();
  }
}
