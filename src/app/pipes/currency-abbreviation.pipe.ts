import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyAbbreviation',
  standalone: true
})
export class CurrencyAbbreviationPipe implements PipeTransform {

  transform(value: number | null | undefined, currencyCode: string = 'USD', symbolDisplay: boolean = true, digitsInfo: string = '1.0-0'): string {
    if (value === null || value === undefined) return 'n/a';

    let symbol = symbolDisplay ? this.getCurrencySymbol(currencyCode) : '';
    let transformedValue = value;

    if (value >= 1000000) {
      transformedValue = value / 1000000;
      return `${symbol}${transformedValue.toFixed(transformedValue % 1 === 0 ? 0 : 1)}m`;
    } else if (value >= 1000) {
      transformedValue = value / 1000;
      return `${symbol}${transformedValue.toFixed(transformedValue % 1 === 0 ? 0 : 1)}k`;
    } else {
      return `${symbol}${value.toFixed(0)}`;
    }
  }

  private getCurrencySymbol(currencyCode: string): string {
    switch (currencyCode) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      // Add more currencies as needed
      default:
        return '';
    }
  }

}
