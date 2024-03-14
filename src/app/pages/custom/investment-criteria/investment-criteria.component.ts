import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { InvestmentCriteria } from 'src/app/models/InvestmentCriteria';
import { PropertyCriteria } from 'src/app/models/PropertyCriteria';
import { InvestmentCriteriaService } from 'src/app/services/investment-criteria.service';
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
  analysisCriteriaForm: FormGroup;
  private unsubscribe: Subscription[] = [];
  selectedTab: string = 'analysis'; // Default tab


  constructor(private fb: FormBuilder, private utilityService: UtilityService, private investmentCriteriaService: InvestmentCriteriaService) {
    this.initForm();
  }

  ngOnInit() {
    console.log('InvestmentCriteriaComponent');
    if (this.isDashboard) {
      this.analysisCriteriaForm.disable();
      this.purchaseCriteriaForm.disable();
      this.propertyCriteriaForm.disable();
    }
    // this.checkanalysisCriteriaForm();
    // this.checkPropertyCriteriaForm();
    // this.checkPurchaseCriteriaForm();
  }

  initForm() {
    this.analysisCriteriaForm = this.fb.group({
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
        }).fire({ icon: 'error', title: '<strong>Purchase Criteria</strong> form is missing required fields.' });

        return false;
      }
    }
    console.log('purchaseCriteriaForm form is correct');
    return true;
  }

  analysisCriteriaFormIsValid() {
    for (const control in this.analysisCriteriaForm.controls) {
      if (this.analysisCriteriaForm.controls[control].errors) {
        console.log('analysisCriteriaForm form has errors');
        this.utilityService.listFormErrors(this.analysisCriteriaForm)

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
        }).fire({ icon: 'error', title: '<strong>Analysis Criteria</strong> form is missing required fields.' });

        return false;
      }
    }
    console.log('analysisCriteriaForm form is correct');
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
        }).fire({ icon: 'error', title: '<strong>Property Criteria</strong> form is missing required fields.' });

        return false;
      }
    }
    console.log('propertyCriteriaForm form is correct');
    return true;
  }

  onSubmit() {
    if (!this.analysisCriteriaFormIsValid()) return;
    if (!this.purchaseCriteriaFormIsValid()) return;
    if (!this.propertyCriteriaFormIsValid()) return;

    const investmentCriteria: InvestmentCriteria = {
      propertyCriteria: this.propertyCriteriaForm.value,
      purchaseCriteria: this.purchaseCriteriaForm.value,
      analysisCriteria: this.analysisCriteriaForm.value
    };

    console.log('Submitting investment criteria:', investmentCriteria);

    this.investmentCriteriaService.updateInvestmentCriteria('17B17EE4-996D-4400-A62A-12634715E6C4', investmentCriteria).subscribe({
      next: (data) => {
        console.log(`Successful Response -> ${data}`);
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
        }).fire({ icon: 'success', title: '<strong>Saved successfuly!</strong>' });
      },
      error: (error) => {
        console.error('Error -> ', error);
        Swal.fire({
          icon: "error",
          title: "<h1>Oops...</h1>",
          text: "Something went wrong! Please try again.",
          showCloseButton: true,
          showConfirmButton: false,
          footer: '<b><a href="#">Contact support</a></b>'
        });
      },
      complete: () => {
        console.log('PostInvestmentCriteria Completed');
      }
    });
  }


  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
