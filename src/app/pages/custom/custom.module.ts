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
import { InfoIconComponent } from './info-icon/info-icon.component';
import { PropertySummaryCardComponent } from './property-summary-card/property-summary-card.component';



@NgModule({
  declarations: [
    InvestmentCriteriaComponent,
    PropertyListComponent,
    SavedPropertyListComponent,
    PropertyAnalysisComponent,
    InfoIconComponent,
    PropertySummaryCardComponent
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
