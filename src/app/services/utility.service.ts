import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  listFormErrors(form: FormGroup) {
    if (form.invalid) {
        Object.keys(form.controls).forEach((key) => {
            let errors = form.get(key)?.errors;
            if (errors) {
                Object.keys(errors).map((error) => {
                    console.log(`${key} has ${error} error`);
                });
            }
        });
    }
  }

  showError(errorMessage?: string) {
    Swal.fire({
      icon: "error",
      title: "<h1>Oops...</h1>",
      text: errorMessage ?? "Something went wrong! Please try again.",
      showCloseButton: true,
      showConfirmButton: false,
      footer: '<b><a href="#">Contact support</a></b>'
    });
  }

  showToast({ icon, title }: { icon: SweetAlertIcon, title: string }) {
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
    }).fire({ icon, title });
  }
}
