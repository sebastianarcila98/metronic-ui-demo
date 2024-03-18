import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InvestmentCriteriaComponent } from './investment-criteria/investment-criteria.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { SavedPropertyListComponent } from './saved-property-list/saved-property-list.component';
import { PropertyAnalysisComponent } from './property-analysis/property-analysis.component';
import { RouterModule } from '@angular/router';
import { CurrencyFormatDirective } from 'src/app/directives/currency-format.directive';



@NgModule({
  declarations: [
    InvestmentCriteriaComponent,
    PropertyListComponent,
    SavedPropertyListComponent,
    PropertyAnalysisComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    CurrencyFormatDirective
  ],
  exports: [InvestmentCriteriaComponent]
})
export class CustomModule { }
