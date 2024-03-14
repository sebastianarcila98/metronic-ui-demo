import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
}
