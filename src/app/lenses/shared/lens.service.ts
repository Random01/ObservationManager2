import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Lens } from '../../shared/models/equipment/equipment';

import { StorageService } from '../../shared/services/storage.service';

@Injectable()
export class LensService extends StorageService<Lens> {

    constructor(protected http: HttpClient) {
        super(http, '/lenses');
    }

    createNew(params?: any): Lens {
        return new Lens(params);
    }

}
