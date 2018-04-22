import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Site } from './../../shared/models/site.model';
import { StorageService } from '../../shared/services/storage.service';

@Injectable()
export class SiteService extends StorageService<Site> {
    constructor(protected http: HttpClient) {
        super(http, '/sites');
    }

    deserialize(state: Site): Site {
        return new Site(state);
    }

}
