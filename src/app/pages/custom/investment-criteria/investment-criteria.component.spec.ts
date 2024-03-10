import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCriteriaComponent } from './investment-criteria.component';

describe('InvestmentCriteriaComponent', () => {
  let component: InvestmentCriteriaComponent;
  let fixture: ComponentFixture<InvestmentCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentCriteriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
