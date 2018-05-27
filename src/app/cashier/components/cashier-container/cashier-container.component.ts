import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable,merge } from 'rxjs';
import { Cashier } from '../../../core/model/cashier';

@Component({
  selector: 'app-cashier-container',
  templateUrl: './cashier-container.component.html',
  styleUrls: ['./cashier-container.component.scss']
})
export class CashierContainerComponent implements OnInit {

  selectedCashier: Observable<Cashier>;

  cashiers: Observable<Cashier[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.cashiers = this.store.select(state => state.cashiers);
    this.selectedCashier = merge(  this.store.select(state => state.selectedCashier),this.store.select(state=>state.cash)).pipe(map(id=>c)); // TODO: Change this, redundant?
  }
}
