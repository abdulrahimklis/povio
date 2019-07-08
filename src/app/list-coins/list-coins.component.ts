import { Component, OnInit } from '@angular/core';
import { GetDataService } from "../services/get-data.service";

@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.component.html',
  styleUrls: ['./list-coins.component.css']
})
export class ListCoinsComponent implements OnInit {
  coins: any;
  smtng: any;

  constructor(private get: GetDataService) {
  }

  ngOnInit() {
    this.coins = this.get.getData();
    this.smtng = this.get.data();
    console.log(this.smtng)
    console.log(this.coins)
  }

}
