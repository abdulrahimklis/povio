import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  one$: Observable<any>;
  data: any;
  two$: Observable<any>;

  constructor(
    private store: Store,
  ) {
    this.one$ = this.store.select(state => state.oneElement.oneElement)
    
    this.one$.subscribe(async (res) => {
      // const type = res.length > 0? res[res.length - 1]: 'USD'
      console.log("data is:", res)
      this.data = res;
    })
  }

  ngOnInit() {
    
  }

}
