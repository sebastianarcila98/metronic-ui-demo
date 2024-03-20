import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InvestmentCriteriaComponent } from './investment-criteria/investment-criteria.component';
import { PropertyAnalysisListComponent } from './property-analysis-list/property-analysis-list.component';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { SavedPropertyListComponent } from './saved-property-list/saved-property-list.component';
import { PropertyAnalysisComponent } from './property-analysis/property-analysis.component';
import { RouterModule } from '@angular/router';
import { CurrencyFormatDirective } from 'src/app/directives/currency-format.directive';
import { InfoIconComponent } from './info-icon/info-icon.component';
import { PropertySummaryCardComponent } from './property-summary-card/property-summary-card.component';
import { AnalyticsMixedWidgetComponent } from './widgets/analytics-mixed-widget/analytics-mixed-widget.component';
import { DataDisplayCardComponent } from './widgets/data-display-card/data-display-card.component';
import { PropertyAnalysesTableComponent } from './widgets/property-analyses-table/property-analyses-table.component';
import { SavedPropertiesWidgetComponent } from './widgets/saved-properties-widget/saved-properties-widget.component';



@NgModule({
  declarations: [
    InvestmentCriteriaComponent,
    PropertyAnalysisListComponent,
    SavedPropertyListComponent,
    PropertyAnalysisComponent,
    InfoIconComponent,
    PropertySummaryCardComponent,
    AnalyticsMixedWidgetComponent,
    DataDisplayCardComponent,
    PropertyAnalysesTableComponent,
    SavedPropertiesWidgetComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    CurrencyFormatDirective
  ],
  exports: [InvestmentCriteriaComponent, AnalyticsMixedWidgetComponent, DataDisplayCardComponent, PropertyAnalysesTableComponent, SavedPropertiesWidgetComponent]
})
export class CustomModule { }
