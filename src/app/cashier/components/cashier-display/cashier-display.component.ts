import { Component, OnInit, Input } from '@angular/core';
import { Cashier } from '../../../core/model/cashier';

@Component({
  selector: 'app-cashier-display',
  templateUrl: './cashier-display.component.html',
  styleUrls: ['./cashier-display.component.scss']
})
export class CashierDisplayComponent implements OnInit {

  @Input() cashier: Cashier;

  constructor() { }

  ngOnInit() {
  }

}
