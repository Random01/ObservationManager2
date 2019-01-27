import { Pipe, PipeTransform } from '@angular/core';
import { Eyepiece } from '../equipment/equipment';
import { DecimalPipe } from '@angular/common';

@Pipe({ name: 'eyepieceFocalLength' })
export class EyepieceFocalLengthPipe implements PipeTransform {

    constructor(
        private decimalPipe: DecimalPipe) {
    }

    private format(value: number): string {
        return this.decimalPipe.transform(value, '0.1');
    }

    transform(eyepiece: Eyepiece): string {
        if (eyepiece == null) {
            return '';
        }

        if (eyepiece.isZoomEyepiece) {
            return `${this.format(eyepiece.focalLength)}-${this.format(eyepiece.maxFocalLength)}`;
        } else {
            return this.format(eyepiece.focalLength);
        }
    }

}
