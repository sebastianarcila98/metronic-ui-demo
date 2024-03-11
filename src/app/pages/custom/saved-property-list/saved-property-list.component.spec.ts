import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPropertyListComponent } from './saved-property-list.component';

describe('SavedPropertyListComponent', () => {
  let component: SavedPropertyListComponent;
  let fixture: ComponentFixture<SavedPropertyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedPropertyListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavedPropertyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
