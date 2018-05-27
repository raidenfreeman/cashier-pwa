import { CashierModule } from './cashier.module';

describe('CashierModule', () => {
  let cashierModule: CashierModule;

  beforeEach(() => {
    cashierModule = new CashierModule();
  });

  it('should create an instance', () => {
    expect(cashierModule).toBeTruthy();
  });
});
