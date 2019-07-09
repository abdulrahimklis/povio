import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from "rxjs";
import { USD, EUR, CNY } from "../store/actions/value.action";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  val$: Observable<number>;

  constructor(private store: Store<{ value: number }>) {
    this.val$ = store.pipe(select('value'))
  }

  ngOnInit() {
  }

  usd() {
    this.store.dispatch(USD());
  }

  eur() {
    this.store.dispatch(EUR());
  }

  cny() {
    this.store.dispatch(CNY());

  }
}
