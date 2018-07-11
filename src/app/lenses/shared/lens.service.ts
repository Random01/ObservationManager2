import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Lens } from '../../shared/models/equipment/equipment';

import { StorageService } from '../../shared/services/storage.service';

@Injectable()
export class LensService extends StorageService<Lens> {

    constructor(protected http: HttpClient) {
        super(http, '/lenses');
    }

    deserialize(state: any): Lens {
        state.id = state._id;
        delete state._id;

        return new Lens(state);
    }

    createNew(): Lens {
        return new Lens();
    }

}
