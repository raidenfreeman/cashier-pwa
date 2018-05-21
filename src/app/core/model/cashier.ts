import { CashierRecord } from "./cashier-record";
import { CreditCard } from "./credit-card";

export class Cashier {
  id: string;
  name: string;
  description: string;
  records: CashierRecord[];
  acceptedCards: CreditCard[];
}
