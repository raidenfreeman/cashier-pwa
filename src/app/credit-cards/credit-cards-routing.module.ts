import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreditCardsComponent } from "./components/credit-cards/credit-cards.component";

const routes: Routes = [
  {
    path: "",
    component: CreditCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardsRoutingModule {}
