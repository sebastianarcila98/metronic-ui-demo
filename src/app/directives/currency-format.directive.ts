import { Directive, ElementRef, HostListener, Injector } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Directive({
  selector: '[appCurrencyFormat]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CurrencyFormatDirective,
      multi: true
    }
  ]
})
export class CurrencyFormatDirective implements ControlValueAccessor {
  private onChange: (value: number) => void;
  private onTouched: () => void;
  private control: NgControl;

  constructor(private el: ElementRef, private injector: Injector) {
    // Delayed injection of NgControl to avoid circular dependency
    setTimeout(() => this.control = this.injector.get(NgControl));
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.el.nativeElement.value = this.format(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.el.nativeElement.disabled = isDisabled;
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const unformatted = this.unformat(value);
    this.control.control?.setValue(unformatted, { emitEvent: false });
    this.el.nativeElement.value = this.format(unformatted);
  }

  private unformat(value: string): number {
    const numericString = value.replace(/[^\d.]/g, '');
    return Number(numericString);
  }

  private format(value: number): string {
    if (value === null || value === undefined) {
        return '';
    }

    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }
}
