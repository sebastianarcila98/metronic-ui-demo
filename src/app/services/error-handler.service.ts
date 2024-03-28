import { ErrorHandler, Injectable } from '@angular/core';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(private utilityService: UtilityService) {}

  handleError(error: any) {
    // Here you can handle the error. You might want to send it to a logging service, for example.
    console.error('An error occurred:', error);
    this.utilityService.showError(error.error);
  }
}
