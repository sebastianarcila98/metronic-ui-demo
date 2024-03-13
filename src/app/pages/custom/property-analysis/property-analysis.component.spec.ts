import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAnalysisComponent } from './property-analysis.component';

describe('PropertyAnalysisComponent', () => {
  let component: PropertyAnalysisComponent;
  let fixture: ComponentFixture<PropertyAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
