import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { InvestmentCriteria } from 'src/app/models/InvestmentCriteria';
import { PropertyCriteria } from 'src/app/models/PropertyCriteria';
import { UtilityService } from 'src/app/services/utility.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-investment-criteria',
  templateUrl: './investment-criteria.component.html',
  styleUrl: './investment-criteria.component.scss'
})
export class InvestmentCriteriaComponent implements OnInit {
  @Input() isDashboard: boolean;
  purchaseCriteriaForm: FormGroup;
  propertyCriteriaForm: FormGroup;
  calculationValuesForm: FormGroup;
  private unsubscribe: Subscription[] = [];
  selectedTab: string = 'calculation'; // Default tab


  constructor(private fb: FormBuilder, private utilityService: UtilityService) {
    this.initForm();
  }

  ngOnInit() {
    console.log('InvestmentCriteriaComponent');
    if (this.isDashboard) {
      this.calculationValuesForm.disable();
      this.purchaseCriteriaForm.disable();
      this.propertyCriteriaForm.disable();
    }
    // this.checkCalculationValuesForm();
    // this.checkPropertyCriteriaForm();
    // this.checkPurchaseCriteriaForm();
  }

  initForm() {  
    this.calculationValuesForm = this.fb.group({
      downPayment: [null, [Validators.required]], 
      loanTerm: [null, [Validators.required]],
      interestRate: [null, [Validators.required]],
      closingCost: [null, [Validators.required]],
      insuranceCost: [null, [Validators.required]],
      repairAndMaintenance: [null, [Validators.required]],
      vacancy: [null, [Validators.required]],
      capitalExpenditure: [null, [Validators.required]],
      managementFees: [null, [Validators.required]],
      otherExpenses: [null, [Validators.required]],
      annualAppreciation: [null, [Validators.required]],
      annualIncomeGrowth: [null, [Validators.required]],
      annualExpenseGrowth: [null, [Validators.required]],
      sellingCost: [null, [Validators.required]],
    });

    this.purchaseCriteriaForm = this.fb.group({
      purchasePrice: [null],
      cashNeeded: [null],
      cashOnCashReturn: [null],
      capRate: [null],
      internalRateOfReturn: [null],
      cashFlow: [null],
    });

    this.propertyCriteriaForm = this.fb.group({
      propertyType: [null, [Validators.required]],
      state: [null, [Validators.required]],
      city: [null, [Validators.required]],
      zipCode: [null],
    });
  }

  purchaseCriteriaFormIsValid() {
    for (const control in this.purchaseCriteriaForm.controls) {
      if (this.purchaseCriteriaForm.controls[control].errors) {
        console.log('purchaseCriteriaForm form has errors');
        this.utilityService.listFormErrors(this.purchaseCriteriaForm)

        Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        }).fire({icon:'error',title:'<strong>Purchase Criteria</strong> is missing required fields.'});

        return false;
      }
    }
    console.log('purchaseCriteriaForm form is correct');
    return true;
  }

  calculationValuesFormIsValid() {
    for (const control in this.calculationValuesForm.controls) {
      if (this.calculationValuesForm.controls[control].errors) {
        console.log('calculationValuesForm form has errors');
        this.utilityService.listFormErrors(this.calculationValuesForm)

        Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        }).fire({icon:'error',title:'<strong>Calculation Values</strong> is missing required fields.'});

        return false;
      }
    }
    console.log('calculationValuesForm form is correct');
    return true;
  }

  propertyCriteriaFormIsValid() {
    for (const control in this.propertyCriteriaForm.controls) {
      if (this.propertyCriteriaForm.controls[control].errors) {
        console.log('propertyCriteriaForm form has errors');
        this.utilityService.listFormErrors(this.propertyCriteriaForm)

        Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        }).fire({icon:'error',title:'<strong>Property Criteria</strong> is missing required fields.'});

        return false;
      }
    }
    console.log('propertyCriteriaForm form is correct');
    return true;
  }
  
  onSubmit() {
    if (!this.calculationValuesFormIsValid()) return;
    if (!this.purchaseCriteriaFormIsValid()) return;
    if (!this.propertyCriteriaFormIsValid()) return;

    const investmentCriteria: InvestmentCriteria = {
      propertyCriteria: this.propertyCriteriaForm.value,
      purchaseCriteria: this.purchaseCriteriaForm.value,
      calculationValues: this.calculationValuesForm.value
    };

    // Here you would typically send this data to your server or use it as needed
    console.log('Submitting investment criteria:', investmentCriteria);
    // For example: this.yourService.submitInvestmentCriteria(investmentCriteria);
  }
  

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
