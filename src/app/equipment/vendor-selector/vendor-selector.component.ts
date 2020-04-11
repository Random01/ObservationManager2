import { Component, Input, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { VendorService } from '../shared/vendor.service';

@Component({
    selector: 'om-vendor-selector',
    templateUrl: './vendor-selector.component.html',
    styleUrls: ['./vendor-selector.component.css']
})
export class VendorSelectorComponent implements OnInit, OnDestroy {

    protected subscriptions: Subscription[] = [];

    @Input() vendor: String;
    @Output() vendorChange = new EventEmitter<string>();

    vendors: string[] = [];
    filteredVendors: Observable<string[]>;

    constructor(
        private vendorService: VendorService) {
    }

    public onVendorChange(model: string) {
        this.vendor = model;
        this.vendorChange.emit(model);
    }

    public ngOnInit() {
        this.subscriptions.push(
            this.vendorService.getAllSuggestions().subscribe(vendors => {
                this.vendors = vendors.map(vendor => vendor.name);

                this.filteredVendors = new Observable((subscriber) => {
                    subscriber.next(this.vendors);
                });
            })
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

}
