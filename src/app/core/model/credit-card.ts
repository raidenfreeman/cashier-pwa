import { CreditCardType } from "./credit-card-type";

export class CreditCard {
  id: string;
  /**
   * A way to identify the card
   *
   * @type {string}
   * @memberof CreditCard
   */
  name: string;
  /**
   * An optional description for the card
   *
   * @type {string}
   * @memberof CreditCard
   */
  description: string;
  /**
   * The name of the issuing bank
   *
   * @type {string}
   * @memberof CreditCard
   */
  issuingOrganization?: string;
  /**
   * The % commission held for every transaction
   *
   * @type {number}
   * @memberof CreditCard
   */
  commissionPercentage: number;
  /**
   * The fixed amount withheld per transaction
   *
   * @type {number}
   * @memberof CreditCard
   */
  commissionFixed: number;
  /**
   * Visa, MasterCard, etc
   *
   * @type {CreditCardType}
   * @memberof CreditCard
   */
  type: string;

  /**
   *
   */
  constructor() {
    this.name = "";
    this.description = "";
    this.issuingOrganization = "";
    this.type = "";
    this.commissionPercentage = 0;
    this.commissionFixed = 0;
  }
}
