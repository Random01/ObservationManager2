import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { SeeingType } from '../../shared/models/seeing-type.model';
import { SeeingItem } from './seeing-type.interface';

@Injectable({ providedIn: 'root' })
export class SeeingTypeService {

  public getSeeingOptions(): Observable<SeeingItem[]> {
    return of([
      { name: 'Perfect seeing, without a quiver.', seeing: SeeingType.Perfect },
      { name: 'Slight quivering of the image.', seeing: SeeingType.Slight },
      { name: 'Moderate seeing.', seeing: SeeingType.Moderate },
      { name: 'Poor seeing.', seeing: SeeingType.Poor },
      { name: 'Very bad seeing.', seeing: SeeingType.VeryBad },
    ]);
  }

}
