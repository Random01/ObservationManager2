import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Observable, map } from 'rxjs';

import { DestroyableComponent } from 'app/shared/components/destroyable.component';

import { VendorService } from '../shared';

@Component({
  selector: 'om-vendor-selector',
  templateUrl: 'vendor-selector.component.html',
  styleUrls: ['vendor-selector.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VendorSelectorComponent extends DestroyableComponent {

  @Input() public vendor = '';
  @Output() public readonly vendorChange = new EventEmitter<string>();

  public readonly vendors$: Observable<string[]> = this.vendorService.getAllSuggestions()
    .pipe(
      map(vendors => vendors.map(vendor => vendor.name)),
    );

  constructor(private readonly vendorService: VendorService) {
    super();
  }

  public onVendorChange(model: string) {
    this.vendor = model;
    this.vendorChange.emit(model);
  }

}
