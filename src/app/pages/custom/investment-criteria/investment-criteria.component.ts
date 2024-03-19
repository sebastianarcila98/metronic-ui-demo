import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { InvestmentCriteria } from 'src/app/models/InvestmentCriteria';
import { InvestmentCriteriaService } from 'src/app/services/investment-criteria.service';
import { UtilityService } from 'src/app/services/utility.service';

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
  isEditing: boolean;
  investmentCriteriaId: string;
  originalAnalysisCriteriaData: any;
  originalPurchaseCriteriaData: any;
  originalPropertyCriteriaData: any;


  constructor(
    private fb: FormBuilder, 
    private utilityService: UtilityService, 
    private investmentCriteriaService: InvestmentCriteriaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    console.log('InvestmentCriteriaComponent');
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['edit'] === 'true') {
        this.isEditing = true;
        this.router.navigate(['/investment-criteria']);
      }
    });

    this.initForm();
  }

  ngOnInit() {
    this.investmentCriteriaService.getInvestmentCriteria('ED8FCF47-66EC-4BED-9ADE-44602830AA65').subscribe({
      next: (data) => {
        this.investmentCriteriaId = data.id;
        this.analysisCriteriaForm.patchValue(data.analysisCriteria);
        this.propertyCriteriaForm.patchValue(data.propertyCriteria);
        this.purchaseCriteriaForm.patchValue(data.purchaseCriteria);
      },
      error: (error) => {
        console.error('InvestmentCriteriaComponent Error', error);
        this.utilityService.showError();
      },
      complete: () => {
        console.log('investmentCriteriaId: ', this.investmentCriteriaId);
        console.log('analysisCriteriaForm: ', this.analysisCriteriaForm.value);
        console.log('propertyCriteriaForm: ', this.propertyCriteriaForm.value);
        console.log('purchaseCriteriaForm: ', this.purchaseCriteriaForm.value);      
      }
    });

    if (this.isDashboard || !this.isEditing) {
      this.analysisCriteriaForm.disable();
      this.purchaseCriteriaForm.disable();
      this.propertyCriteriaForm.disable();
    }    
  }

  initForm() {
    this.analysisCriteriaForm = this.fb.group({
      id: [null, Validators.required],
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
      id: [null, Validators.required],
      purchasePrice: [null],
      cashNeeded: [null],
      cashOnCashReturn: [null],
      capRate: [null],
      internalRateOfReturn: [null],
      cashFlow: [null],
    });

    this.propertyCriteriaForm = this.fb.group({
      id: [null, Validators.required],
      propertyType: [null, [Validators.required]],
      state: [null, [Validators.required]],
      city: [null, [Validators.required]],
      zipCode: [null],
    });
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;

    if (this.isEditing) {
        // Store the current form data
        this.originalAnalysisCriteriaData = this.analysisCriteriaForm.getRawValue();
        this.originalPurchaseCriteriaData = this.purchaseCriteriaForm.getRawValue();
        this.originalPropertyCriteriaData = this.propertyCriteriaForm.getRawValue();

        this.analysisCriteriaForm.enable();
        this.purchaseCriteriaForm.enable();
        this.propertyCriteriaForm.enable();
    } else {
        // Restore the original form data if editing is canceled
        this.analysisCriteriaForm.setValue(this.originalAnalysisCriteriaData);
        this.purchaseCriteriaForm.setValue(this.originalPurchaseCriteriaData);
        this.propertyCriteriaForm.setValue(this.originalPropertyCriteriaData);

        this.analysisCriteriaForm.disable();
        this.purchaseCriteriaForm.disable();
        this.propertyCriteriaForm.disable();
    }
}

  purchaseCriteriaFormIsValid() {
    for (const control in this.purchaseCriteriaForm.controls) {
      if (this.purchaseCriteriaForm.controls[control].errors) {
        console.log('purchaseCriteriaForm form has errors');
        this.utilityService.listFormErrors(this.purchaseCriteriaForm)

        this.utilityService.showToast({icon: 'error', title: '<strong>Purchase Criteria</strong> form is missing required fields.'});

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

        this.utilityService.showToast({icon: 'error', title: '<strong>Analysis Criteria</strong> form is missing required fields.'});

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

        this.utilityService.showToast({icon: 'error', title: '<strong>Property Criteria</strong> form is missing required fields.'});

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
      id: this.investmentCriteriaId,
      propertyCriteria: this.propertyCriteriaForm.value,
      purchaseCriteria: this.purchaseCriteriaForm.value,
      analysisCriteria: this.analysisCriteriaForm.value
    };

    console.log('Submitting investment criteria: ', investmentCriteria);

    this.investmentCriteriaService.updateInvestmentCriteria('ED8FCF47-66EC-4BED-9ADE-44602830AA65', investmentCriteria).subscribe({
      next: (data) => {
        this.investmentCriteriaId = data.id;
        this.analysisCriteriaForm.patchValue(data.analysisCriteria);
        this.propertyCriteriaForm.patchValue(data.propertyCriteria);
        this.purchaseCriteriaForm.patchValue(data.purchaseCriteria);

        this.isEditing = false;
        this.analysisCriteriaForm.disable();
        this.purchaseCriteriaForm.disable();
        this.propertyCriteriaForm.disable();
        
        this.cdr.detectChanges();

        this.utilityService.showToast({icon: 'success', title: '<b>Saved Successfuly!</b>'});
      },
      error: (error) => {
        console.error('Error -> ', error);
        this.utilityService.showError();
      },
      complete: () => {
        console.log('investmentCriteriaId: ', this.investmentCriteriaId);
        console.log('analysisCriteriaForm: ', this.analysisCriteriaForm.value);
        console.log('propertyCriteriaForm: ', this.propertyCriteriaForm.value);
        console.log('purchaseCriteriaForm: ', this.purchaseCriteriaForm.value);  
      }
    });
  }


  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
