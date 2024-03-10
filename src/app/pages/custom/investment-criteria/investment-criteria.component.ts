import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-investment-criteria',
  templateUrl: './investment-criteria.component.html',
  styleUrl: './investment-criteria.component.scss'
})
export class InvestmentCriteriaComponent implements OnInit {
  form: FormGroup;
  propertyCriteriaForm: FormGroup;
  private unsubscribe: Subscription[] = [];
  selectedTab: string = 'purchase'; // Default tab


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
