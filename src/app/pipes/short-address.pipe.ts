import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortAddress',
  standalone: true
})
export class ShortAddressPipe implements PipeTransform {

  transform(fullAddress: string | undefined): string | undefined {
    return fullAddress ? fullAddress.split(',')[0] : fullAddress;
  }

}
