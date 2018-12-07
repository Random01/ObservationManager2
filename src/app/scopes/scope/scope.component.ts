import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map, startWith } from 'rxjs/operators';

import { Scope } from '../../shared/models/equipment/scope.model';

import { Vendor } from '../../shared/models/equipment/vendor.model';
import { FormControl } from '@angular/forms';
import { VendorService } from '../../equipment/shared/vendor.service';

@Component({
    selector: 'om-scope',
    templateUrl: './scope.component.html',
    styleUrls: ['./scope.component.css']
})

export class ScopeComponent implements OnInit {
    @Input() scope: Scope;

    vendors: string[] = [];
    filteredVendors: Observable<string[]>;
    myControl = new FormControl();

    constructor(
        private vendorService: VendorService) {
    }

    ngOnInit() {
        this.vendorService.getAllSuggestions().then((vendors) => {
            this.vendors = vendors.map(vendor => vendor.name);

            this.filteredVendors = new Observable((subscriber) => {
                subscriber.next(this.vendors);
            });
        });

    }

}
