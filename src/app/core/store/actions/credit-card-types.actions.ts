import { CreditCardType } from "../../model";

export class LoadCreditCardTypes {
  static readonly type = "[CreditCardTypesState] Load Credit Card Types";
}

export class LoadCreditCardTypesSuccess {
  static readonly type = "[CreditCardTypesState] Load Credit Card Types Succeeded";
  constructor(public readonly payload: CreditCardType[]) {}
}

export class LoadCreditCardTypesFailure {
  static readonly type = "[CreditCardTypesState] Load Credit Card Types Failed";
  constructor(public readonly payload?: any) {}
}
