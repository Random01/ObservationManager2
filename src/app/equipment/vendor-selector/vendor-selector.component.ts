import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { VendorService } from '../shared/vendor.service';

@Component({
    selector: 'om-vendor-selector',
    templateUrl: './vendor-selector.component.html',
    styleUrls: ['./vendor-selector.component.css']
})
export class VendorSelectorComponent implements OnInit {

    @Input() vendor: String;
    @Output() vendorChange = new EventEmitter<string>();

    vendors: string[] = [];
    filteredVendors: Observable<string[]>;

    constructor(
        private vendorService: VendorService) {
    }

    onVendorChange(model: string) {
        this.vendor = model;
        this.vendorChange.emit(model);
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
