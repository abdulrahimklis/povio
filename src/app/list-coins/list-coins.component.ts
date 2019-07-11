import { Component, OnInit } from '@angular/core';
import { GetDataService } from "../services/get-data.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.component.html',
  styleUrls: ['./list-coins.component.css']
})
export class ListCoinsComponent implements OnInit {
  coins: any;

  constructor(
    public get: GetDataService,
    private location: Location)
  {}

  async ngOnInit() {
    this.coins = await this.get.getData(100,'USD');
    console.log(this.coins[1])
  }

}
