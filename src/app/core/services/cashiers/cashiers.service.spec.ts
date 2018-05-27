import { TestBed, inject } from '@angular/core/testing';

import { CashiersService } from './cashiers.service';

describe('CashiersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CashiersService]
    });
  });

  it('should be created', inject([CashiersService], (service: CashiersService) => {
    expect(service).toBeTruthy();
  }));
});
