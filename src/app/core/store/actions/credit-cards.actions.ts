import { CreditCard } from "../../model";

export class LoadCreditCards {
  static readonly type = "[CreditCards] Load Credit Cards";
}

export class LoadCreditCardsSuccess {
  static readonly type = "[CreditCardsState] Load Credit Cards Succeeded";
  constructor(public readonly payload: CreditCard[]) {}
}

export class LoadCreditCardsFailure {
  static readonly type = "[CreditCardsState] Load Credit Cards Failed";
  constructor(public readonly payload?: any) {}
}

export class UpdateCard {
  static readonly type = "[CreditCardFormComponent] Update Credit Card";

  constructor(public readonly payload: CreditCard) {}
}

export class CreateCard {
  static readonly type = "[CreateCreditCardComponent] Create Credit Card";

  constructor(public readonly payload: CreditCard) {}
}

export class DeleteCard {
  static readonly type = "[CreditCardFormComponent] Delete Credit Card";

  constructor(public readonly payload: string) {}
}
