import {
    Component,
    Input,
    OnInit,
    EventEmitter,
    Output,
    ChangeDetectionStrategy,
} from '@angular/core';

import { Observable } from 'rxjs';

import { DestroyableComponent } from '../../shared/components/destroyable.component';
import { VendorService } from '../shared';

@Component({
    selector: 'om-vendor-selector',
    templateUrl: './vendor-selector.component.html',
    styleUrls: ['./vendor-selector.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VendorSelectorComponent extends DestroyableComponent implements OnInit {

    @Input() public vendor = '';
    @Output() public readonly vendorChange = new EventEmitter<string>();

    public vendors: string[] = [];
    public filteredVendors$: Observable<string[]>;

    constructor(private readonly vendorService: VendorService) {
        super();
    }

    public onVendorChange(model: string) {
        this.vendor = model;
        this.vendorChange.emit(model);
    }

    public ngOnInit() {
        this.handle(
            this.vendorService.getAllSuggestions().subscribe(vendors => {
                this.vendors = vendors.map(vendor => vendor.name);

                this.filteredVendors$ = new Observable((subscriber) => {
                    subscriber.next(this.vendors);
                });
            })
        );
    }

}
