import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { FilterType } from '../../shared/models/equipment/equipment';

@Injectable({ providedIn: 'root' })
export class FilterTypeService {

  public getAll(): Observable<FilterType[]> {
    return of([
      FilterType.Hbeta,
      FilterType.Halpha,
      FilterType.OIII,
      FilterType.BroadBand,
      FilterType.NarrowBand,
      FilterType.Color,
      FilterType.Corrective,
      FilterType.Solar,
      FilterType.Neutral,
    ]);
  }
}
