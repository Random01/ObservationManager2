import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Vendor } from '../../shared/models/equipment/vendor.model';

@Injectable({ providedIn: 'root' })
export class VendorService {

    public getAllSuggestions(): Observable<Vendor[]> {
        return of([
            new Vendor({ name: 'Sky Watcher' }),
            new Vendor({ name: 'Deep-Sky' }),
            new Vendor({ name: 'Celestron' }),
            new Vendor({ name: 'Baader' }),
            new Vendor({ name: 'Astronomik' }),
            new Vendor({ name: 'Tele Vue' }),
            new Vendor({ name: 'Explore Scientific' })
        ]);
    }

}
