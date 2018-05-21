import { Component, OnInit } from "@angular/core";
import {
  Store,
  Actions,
  ofActionSuccessful,
  ofActionDispatched
} from "@ngxs/store";
import { CreditCardsState } from "../../../core/store/state/credit-cards.state";
import {
  LoadCreditCardsSuccess,
  LoadCreditCards
} from "../../../core/store/actions/credit-cards.actions";
import { LoadCreditCardTypes } from "../../../core/store/actions/credit-card-types.actions";
import { CreditCardType, CreditCard } from "../../../core/model";
import { Observable } from "rxjs";

@Component({
  selector: "app-credit-cards",
  templateUrl: "./credit-cards.component.html",
  styleUrls: ["./credit-cards.component.scss"]
})
export class CreditCardsComponent implements OnInit {
  constructor(private store: Store, private actions$: Actions) {}
  creditCards$: Observable<CreditCard[]>;
  types$: Observable<CreditCardType[]>;

  showSpinner: boolean = true;
  ngOnInit() {
    this.actions$
      .pipe(ofActionDispatched(LoadCreditCardsSuccess))
      .subscribe(() => (this.showSpinner = false));
    this.types$ = this.store.select(x => x.creditCardTypes);
    this.creditCards$ = this.store.select(x => x.creditCards);
    this.store.dispatch(new LoadCreditCards());
    this.store.dispatch(new LoadCreditCardTypes());
  }
}
