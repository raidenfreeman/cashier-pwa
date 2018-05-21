import { CreditCardsModule } from './credit-cards.module';

describe('CreditCardsModule', () => {
  let creditCardsModule: CreditCardsModule;

  beforeEach(() => {
    creditCardsModule = new CreditCardsModule();
  });

  it('should create an instance', () => {
    expect(creditCardsModule).toBeTruthy();
  });
});
