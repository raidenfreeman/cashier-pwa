import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierDisplayComponent } from './cashier-display.component';

describe('CashierDisplayComponent', () => {
  let component: CashierDisplayComponent;
  let fixture: ComponentFixture<CashierDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
