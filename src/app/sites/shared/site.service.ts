import { Injectable } from '@angular/core';

import { Site } from './../../shared/models/site.model';
import { SITES } from './mock-sites';

@Injectable()
export class SiteService {

    getSites(): Promise<Site[]> {
        return Promise.resolve(SITES);
    }

    addSite(site: Site): Promise<string> {
        return Promise.resolve('1')
    }

}