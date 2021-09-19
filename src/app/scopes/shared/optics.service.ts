import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { OpticsType } from '../../shared/models/equipment/optics-type.model';

@Injectable({ providedIn: 'root' })
export class OpticsService {

  private readonly names: string[] = [
    'Naked eye',
    'Binoculars',
    'Newton',
    'Refractor',
    'Cassegrain',
    'Schmidt-Cassegrain',
    'Maksutov',
  ];

  public getOpticsTypes(): Observable<OpticsType[]> {
    return of(this.names.map(name => new OpticsType({ name })));
  }
}
