import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Filter } from './../../shared/models/equipment/filter.model';
import { StorageService } from '../../shared/services/storage.service';
import { Entity } from '../../shared/models/models';

@Injectable()
export class FilterService extends StorageService<Filter> {

    constructor(protected http: HttpClient) {
        super(http, '/filters');
    }

    deserialize(state: any): Filter {
        return new Filter(state);
    }

}
