import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalConfig, ModalComponent } from '../../_metronic/partials';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };
  @ViewChild('modal') private modalComponent: ModalComponent;
  form: FormGroup;
  private unsubscribe: Subscription[] = [];
  selectedTab: string = 'purchase'; // Default tab

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      businessName: ['', [Validators.required]],
      businessDescriptor: [
        '',
        [Validators.required],
      ],
      businessType: ['', [Validators.required]],
      businessDescription: [''],
      businessEmail: [
        "example@email.com",
        [Validators.required, Validators.email],
      ],
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

  async openModal() {
    return await this.modalComponent.open();
  }
}
