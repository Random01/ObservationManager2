import { Injectable } from '@angular/core';
import { Vendor } from '../../shared/models/equipment/vendor.model';

@Injectable()
export class VendorService {

    getAllSuggestions(): Promise<Vendor[]> {
        return Promise.resolve([
            new Vendor({ name: 'Sky Watcher' }),
            new Vendor({ name: 'Deep-Sky' }),
            new Vendor({ name: 'Celestron' })
        ]);
    }

}
