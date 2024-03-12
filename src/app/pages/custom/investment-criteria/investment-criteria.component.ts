import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-investment-criteria',
  templateUrl: './investment-criteria.component.html',
  styleUrl: './investment-criteria.component.scss'
})
export class InvestmentCriteriaComponent implements OnInit {
  @Input() isDashboard: boolean;
  form: FormGroup;
  propertyCriteriaForm: FormGroup;
  calculationValuesForm: FormGroup;
  private unsubscribe: Subscription[] = [];
  selectedTab: string = 'calculation'; // Default tab


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {  
    this.form = this.fb.group({
      purchasePrice: ['', [Validators.required]],
      cashNeeded: [
        '',
        [Validators.required],
      ],
      cashOnCashReturn: [''],
      capRate: [''],
      internalRateOfReturn: [''],
      cashFlow: ['', [Validators.required]],
    });

    this.propertyCriteriaForm = this.fb.group({
      propertyType: [''], // "duplex", "tri-plex"
      bedrooms: ['', [Validators.required]],
      bathrooms: [
        '',
        [Validators.required],
      ],
      state: [''],
      city: [''],
      zipCode: [''],
    });

    this.calculationValuesForm = this.fb.group({
      downPayment: [''], 
      loanTerm: ['', [Validators.required]],
      interestRate: ['', [Validators.required]],
      closingCost: [''],
      insuranceCost: [''],
      repairAndMaintenance: [''],
      vacancy: ['', [Validators.required]],
      capitalExpenditure: ['', [Validators.required]],
      managementFees: ['', [Validators.required]],
      otherExpenses: ['', [Validators.required]],
      annualAppreciation: ['', [Validators.required]],
      annualIncomeGrowth: ['', [Validators.required]],
      annualExpenseGrowth: ['', [Validators.required]],
      sellingCost: ['', [Validators.required]],
    });
  }

  checkForm() {
    return !(
      this.form.get('businessName')?.hasError('required') ||
      this.form.get('businessDescriptor')?.hasError('required') ||
      this.form.get('businessType')?.hasError('required') ||
      this.form.get('businessEmail')?.hasError('required') ||
      this.form.get('businessEmail')?.hasError('email')
    );
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
