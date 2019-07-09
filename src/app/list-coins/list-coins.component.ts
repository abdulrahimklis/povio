import { Component, OnInit } from '@angular/core';
import { GetDataService } from "../services/get-data.service";

@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.component.html',
  styleUrls: ['./list-coins.component.css']
})
export class ListCoinsComponent implements OnInit {
  coins: any;

  constructor(public get: GetDataService) {}

  async ngOnInit() {
    this.coins = await this.get.getData('USD');
  }
}
