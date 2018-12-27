import { Injectable } from '@angular/core';

import { OpticsType } from '../../shared/models/equipment/optics-type.model';

import { Observable ,  of } from 'rxjs';

@Injectable()
export class OpticsService {

    private static names: string[] = [
        'Naked eye',
        'Binoculars',
        'Newton',
        'Refractor',
        'Cassegrain',
        'Schmidt-Cassegrain',
        'Maksutov'
    ];

    getOpticsTypes(): Observable<OpticsType[]> {
        return of(OpticsService.names.map(name => new OpticsType({ name })));
    }
}
