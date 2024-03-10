import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InvestmentCriteriaComponent } from './investment-criteria/investment-criteria.component';



@NgModule({
  declarations: [
    InvestmentCriteriaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CustomModule { }
