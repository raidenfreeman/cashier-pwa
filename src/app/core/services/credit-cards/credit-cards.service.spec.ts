import { TestBed, inject } from '@angular/core/testing';

import { CreditCardsService } from './credit-cards.service';

describe('CreditCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditCardsService]
    });
  });

  it('should be created', inject([CreditCardsService], (service: CreditCardsService) => {
    expect(service).toBeTruthy();
  }));
});
