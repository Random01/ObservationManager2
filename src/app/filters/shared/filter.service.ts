import { Injectable } from '@angular/core';

import { Filter } from './../../shared/models/equipment/filter.model';
import { FILTERS } from './mock-filters';

@Injectable()
export class FilterService {

    getFilters(): Promise<Filter[]> {
        return Promise.resolve(FILTERS);
    }

    addFilter(eyepiece: Filter): Promise<string> {
        return Promise.resolve('1');
    }
}