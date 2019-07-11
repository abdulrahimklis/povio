import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  data: any = {
    "id": 1,
    "name": "Bitcoin",
    "symbol": "BTC",
    "slug": "bitcoin",
    "circulating_supply": 17809737,
    "total_supply": 17809737,
    "max_supply": 21000000,
    "date_added": "2013-04-28T00:00:00.000Z",
    "num_market_pairs": 7678,
    "tags": [
      "mineable"
    ],
    "platform": null,
    "cmc_rank": 1,
    "last_updated": "2019-07-10T11:34:30.000Z",
    "quote": {
      "USD": {
        "price": 13010.9825528,
        "volume_24h": 26622730194.2414,
        "percent_change_1h": 0.328001,
        "percent_change_24h": 5.35863,
        "percent_change_7d": 14.8103,
        "market_cap": 231722177376.9566,
        "last_updated": "2019-07-10T11:34:30.000Z"
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
