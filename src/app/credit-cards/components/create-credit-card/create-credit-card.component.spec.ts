import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCreditCardComponent } from './create-credit-card.component';

describe('CreateCreditCardComponent', () => {
  let component: CreateCreditCardComponent;
  let fixture: ComponentFixture<CreateCreditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCreditCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
