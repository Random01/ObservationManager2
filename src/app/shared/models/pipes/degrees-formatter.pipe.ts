import { Pipe, PipeTransform } from '@angular/core';
import { Degrees } from '../degrees.model';

@Pipe({ name: 'degreesFormatter' })
export class DegreesFormatter implements PipeTransform {

    transform(deg: Degrees): string {
        if (deg == null) {
            return '';
        }

        return `${deg.degrees.toFixed(0)}° ${deg.arcminutes.toFixed(0)}′ ${deg.arcseconds.toFixed(0)}″`;
    }

}
