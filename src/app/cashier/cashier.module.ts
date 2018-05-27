import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashierContainerComponent } from './components/cashier-container/cashier-container.component';
import { CashierDisplayComponent } from './components/cashier-display/cashier-display.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CashierContainerComponent, CashierDisplayComponent]
})
export class CashierModule { }
