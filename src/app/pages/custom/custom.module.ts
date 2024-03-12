import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InvestmentCriteriaComponent } from './investment-criteria/investment-criteria.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { SavedPropertyListComponent } from './saved-property-list/saved-property-list.component';



@NgModule({
  declarations: [
    InvestmentCriteriaComponent,
    PropertyListComponent,
    SavedPropertyListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [InvestmentCriteriaComponent]
})
export class CustomModule { }
