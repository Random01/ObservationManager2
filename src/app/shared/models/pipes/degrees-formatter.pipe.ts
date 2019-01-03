import { Pipe, PipeTransform } from '@angular/core';
import { Degrees } from '../degrees.model';

@Pipe({ name: 'degreesFormatter' })
export class DegreesFormatter implements PipeTransform {

    transform(degrees: number): string {
        const deg = new Degrees();
        deg.fromDegrees(degrees);
        return `${deg.degrees.toFixed(0)}° ${deg.arcminutes.toFixed(0)}′ ${deg.arcseconds.toFixed(0)}″`;
    }

}
