import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Site } from './../../shared/models/site.model';
import { StorageService } from '../../shared/services/storage.service';

@Injectable()
export class SiteService extends StorageService<Site> {

    constructor(protected http: HttpClient) {
        super(http, '/sites');
    }

    deserialize(state: any): Site {
        state.id = state._id;
        delete state._id;
        return new Site(state);
    }

    createNew(): Site {
        return new Site();
    }
}
