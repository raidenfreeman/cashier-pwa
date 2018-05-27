import { Action, Selector, State, StateContext } from "@ngxs/store";
import { pipe, asapScheduler, of } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { Cashier } from "../../model";
import { CashiersService } from "../../services";
import { LoadCashiers, LoadCashiersSuccess, CreateCashier, UpdateCashier, DeleteCashier, LoadCashiersFailure } from '../actions/cashiers.actions';

export interface CashierState {
  cashiers: Cashier[],
  selectedCashierId: string
}

@State<CashierState>({
  name: "cashiers",
  defaults: {
    cashiers: [],
    selectedCashierId: ""
  }
})
export class CreditCardsState {
  constructor(private cashiersService: CashiersService) { }

  @Selector()
  static getCashiers(state: CashierState): CashierState {
    return state;
  }

  @Action(LoadCashiers)
  loadCreditCards({ dispatch }: StateContext<CashierState>) {
    return this.cashiersService.getCashiers().pipe(
      map((Cashiers: Cashier[]) => {
        asapScheduler.schedule(() =>
          dispatch(new LoadCashiersSuccess(Cashiers))
        );
      }),
      catchError(err =>
        of(asapScheduler.schedule(() => dispatch(new LoadCashiersFailure())))
      )
    );
  }

  @Action(LoadCashiersSuccess)
  loadCreditCardSuccess(
    { patchState }: StateContext<CashierState>,
    action: LoadCashiersSuccess
  ) {
    patchState({ cashiers: action.payload });
  }

  @Action(CreateCashier)
  CreateCreditCard(
    { dispatch }: StateContext<CashierState>,
    action: CreateCashier
  ) {
    this.cashiersService.createCashier(action.payload).subscribe();
  }

  @Action(UpdateCashier)
  UpdateCreditCard(
    { dispatch }: StateContext<CashierState>,
    action: UpdateCashier
  ) {
    this.cashiersService.updateCashier(action.payload).subscribe();
  }

  @Action(DeleteCashier)
  DeleteCreditCard(ctx: StateContext<CashierState>, action: DeleteCashier) {
    this.cashiersService.deleteCashier(action.payload).subscribe();
  }
}
