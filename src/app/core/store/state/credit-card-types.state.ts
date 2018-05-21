import { Action, Selector, State, StateContext } from "@ngxs/store";
import { asapScheduler, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { CreditCardsService } from "../../services";
import { CreditCardType } from "../../model";
import {
  LoadCreditCardTypes,
  LoadCreditCardTypesFailure,
  LoadCreditCardTypesSuccess
} from "../actions/credit-card-types.actions";

@State<CreditCardType[]>({
  name: "creditCardTypes",
  defaults: []
})
export class CreditCardTypesState {
  constructor(private productsService: CreditCardsService) {}

  @Selector()
  static getCreditCardTypes(state: CreditCardType[]): CreditCardType[] {
    return state;
  }
  // load Products
  @Action(LoadCreditCardTypes)
  loadCreditCardTypes({ dispatch }: StateContext<CreditCardType[]>) {
    return this.productsService.getCreditCardTypes().pipe(
      map((CreditCardTypes: CreditCardType[]) => {
        asapScheduler.schedule(() =>
          dispatch(new LoadCreditCardTypesSuccess(CreditCardTypes))
        );
      }),
      catchError(err =>
        of(
          asapScheduler.schedule(() =>
            dispatch(new LoadCreditCardTypesFailure())
          )
        )
      )
    );
  }

  @Action(LoadCreditCardTypesSuccess)
  loadCreditCardTypeSuccess(
    { setState }: StateContext<CreditCardType[]>,
    action: LoadCreditCardTypesSuccess
  ) {
    setState(action.payload);
  }
}
