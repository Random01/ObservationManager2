import { formatNumber } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

import { Eyepiece } from '../equipment/equipment';

@Pipe({
  name: 'eyepieceFocalLength',
  standalone: true,
})
export class EyepieceFocalLengthPipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) private readonly locale: string) { }

  public transform(eyepiece: Eyepiece): string {
    
    if (eyepiece == null) {
      return '';
    }

    if (eyepiece.isZoomEyepiece) {
      return `${this.format(eyepiece.focalLength)}-${this.format(eyepiece.maxFocalLength)}`;
    } else {
      return this.format(eyepiece.focalLength);
    }
  }

  private format(value: number): string {
    return formatNumber(value, this.locale, '0.1');
  }

}
