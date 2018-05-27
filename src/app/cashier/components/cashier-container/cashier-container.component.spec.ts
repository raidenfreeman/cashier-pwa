import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierContainerComponent } from './cashier-container.component';

describe('CashierContainerComponent', () => {
  let component: CashierContainerComponent;
  let fixture: ComponentFixture<CashierContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
