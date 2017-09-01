import { Injectable } from '@angular/core';
import { Site } from './../../shared/models/site.model';

@Injectable()
export class SiteService {

    sites: Site[] = [
        new Site({
            id: '1',
            name: 'Latuhino',
            timezone: 4,
            longitude: 51,
            latitude: 46,
            elevation: 70,
            code: 0
        })
    ];

    getSites(): Promise<Site[]> {
        return Promise.resolve(this.sites);
    }

    addSite(site: Site): Promise<string> {
        this.sites.push(site);
        return Promise.resolve('1')
    }

}