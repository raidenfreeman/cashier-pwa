import { Cashier, CashierRecord } from "../../model";

export class LoadCashiers {
  static readonly type = "[CashiersState] Load Cashiers";
}

export class LoadCashiersSuccess {
  static readonly type = "[CashiersState] Load Cashiers Succeeded";
  constructor(public readonly payload: Cashier[]) { }
}

export class LoadCashiersFailure {
  static readonly type = "[CashiersState] Load Cashiers Failed";
  constructor(public readonly payload?: any) { }
}

export class UpdateCashier {
  static readonly type = "[CashiersWrapperComponent] Update Cashier Record";

  constructor(public readonly payload: Cashier) { }
}

export class CreateCashier {
  static readonly type = "[CashiersWrapperComponent] Create Cashier";

  constructor(public readonly payload: Cashier) { }
}

export class DeleteCashier {
  static readonly type = "[CashiersWrapperComponent] Delete Cashier";

  constructor(public readonly payload: string) { }
}
