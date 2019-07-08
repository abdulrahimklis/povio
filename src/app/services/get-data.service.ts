import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(
    private http: HttpClient,
  ) {}

  url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD";

  getData() {
    this.http.get(this.url, {
      headers: new HttpHeaders({
        "X-CMC_PRO_API_KEY": "7c1ac462-bc7f-4b52-9f8f-47604d5d6820",
        "Content-Type": "application/json"
      }),
      responseType: "json"
    }).subscribe(res => {
      return res;
    });
  }

  data() {
    return [{
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "slug": "bitcoin",
        "circulating_supply": 17799450,
        "total_supply": 17799450,
        "max_supply": 21000000,
        "date_added": "2013-04-28T00:00:00.000Z",
        "num_market_pairs": 7672,
        "tags": [
          "mineable"
        ],
        "platform": null,
        "cmc_rank": 1,
        "last_updated": "2019-07-05T09:32:31.000Z",
        "quote": {
          "USD": {
            "price": 11158.2529958,
            "volume_24h": 24969217309.6313,
            "percent_change_1h": 1.76939,
            "percent_change_24h": -4.50621,
            "percent_change_7d": -3.68104,
            "market_cap": 198610766286.09232,
            "last_updated": "2019-07-05T09:32:31.000Z"
          }
        }
      },
      {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "circulating_supply": 106770276.0616,
        "total_supply": 106770276.0616,
        "max_supply": null,
        "date_added": "2015-08-07T00:00:00.000Z",
        "num_market_pairs": 5429,
        "tags": [
          "mineable"
        ],
        "platform": null,
        "cmc_rank": 2,
        "last_updated": "2019-07-05T09:32:18.000Z",
        "quote": {
          "USD": {
            "price": 290.427449782,
            "volume_24h": 8622537484.04755,
            "percent_change_1h": 1.73369,
            "percent_change_24h": -1.86184,
            "percent_change_7d": -3.98609,
            "market_cap": 31009018989.09061,
            "last_updated": "2019-07-05T09:32:18.000Z"
          }
        }
      },
      {
        "id": 52,
        "name": "XRP",
        "symbol": "XRP",
        "slug": "ripple",
        "circulating_supply": 42566596173,
        "total_supply": 99991588101,
        "max_supply": 100000000000,
        "date_added": "2013-08-04T00:00:00.000Z",
        "num_market_pairs": 427,
        "tags": [],
        "platform": null,
        "cmc_rank": 3,
        "last_updated": "2019-07-05T09:32:04.000Z",
        "quote": {
          "USD": {
            "price": 0.380770483644,
            "volume_24h": 1471295990.32285,
            "percent_change_1h": 0.884026,
            "percent_change_24h": -4.75364,
            "percent_change_7d": -7.47198,
            "market_cap": 16208103411.87205,
            "last_updated": "2019-07-05T09:32:04.000Z"
          }
        }
      }]
    }
}
