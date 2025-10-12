import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { Observable, map } from 'rxjs';

import { DestroyableComponent } from '../../shared/components/destroyable.component';
import { VendorService } from '../shared';

@Component({
  selector: 'om-vendor-selector',
  templateUrl: 'vendor-selector.component.html',
  styleUrl: 'vendor-selector.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule, MatAutocompleteModule, AsyncPipe, FormsModule],
})
export class VendorSelectorComponent extends DestroyableComponent {
  @Input() public vendor = '';
  @Output() public readonly vendorChange = new EventEmitter<string>();

  public readonly vendors$: Observable<string[]> = this.vendorService.getAllSuggestions().pipe(map((vendors) => vendors.items.map((vendor) => vendor.name)));

  constructor(private readonly vendorService: VendorService) {
    super();
  }

  public onVendorChange(model: string) {
    this.vendor = model;
    this.vendorChange.emit(model);
  }
}
