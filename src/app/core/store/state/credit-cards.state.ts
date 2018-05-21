import { Action, Selector, State, StateContext } from "@ngxs/store";
import { asapScheduler, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { CreditCard } from "../../model";
import { CreditCardsService } from "../../services";
import {
  LoadCreditCards,
  LoadCreditCardsSuccess,
  LoadCreditCardsFailure,
  CreateCard,
  UpdateCard,
  DeleteCard
} from "../actions/credit-cards.actions";
import { CreateCreditCardComponent } from "../../../credit-cards/components/create-credit-card/create-credit-card.component";

@State<CreditCard[]>({
  name: "creditCards",
  defaults: []
})
export class CreditCardsState {
  constructor(private creditCardsService: CreditCardsService) {}

  @Selector()
  static getCards(state: CreditCard[]): CreditCard[] {
    return state;
  }
  // load Products
  @Action(LoadCreditCards)
  loadCreditCards({ dispatch }: StateContext<CreditCard[]>) {
    return this.creditCardsService.getCreditCards().pipe(
      map((CreditCards: CreditCard[]) => {
        asapScheduler.schedule(() =>
          dispatch(new LoadCreditCardsSuccess(CreditCards))
        );
      }),
      catchError(err =>
        of(asapScheduler.schedule(() => dispatch(new LoadCreditCardsFailure())))
      )
    );
  }

  @Action(LoadCreditCardsSuccess)
  loadCreditCardSuccess(
    { setState }: StateContext<CreditCard[]>,
    action: LoadCreditCardsSuccess
  ) {
    setState(action.payload);
  }

  @Action(CreateCard)
  CreateCreditCard(
    { dispatch }: StateContext<CreditCard[]>,
    action: CreateCard
  ) {
    this.creditCardsService.createCreditCard(action.payload).subscribe();
  }

  @Action(UpdateCard)
  UpdateCreditCard(
    { dispatch }: StateContext<CreditCard[]>,
    action: UpdateCard
  ) {
    this.creditCardsService.updateCreditCard(action.payload).subscribe();
  }

  @Action(DeleteCard)
  DeleteCreditCard(ctx: StateContext<CreditCard[]>, action: DeleteCard) {
    this.creditCardsService.deleteCreditCard(action.payload).subscribe();
  }
}
