import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TargetSearchParams } from './target-search-params.model';
import { TargetTypeSelectorComponent } from '../target-type-selector/target-type-selector.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'om-target-search-params',
  templateUrl: 'target-search-params.component.html',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, TargetTypeSelectorComponent],
})
export class TargetSearchParamsComponent {
  @Input() public searchParams?: TargetSearchParams;
  @Output() public readonly search = new EventEmitter<TargetSearchParams>();

  public onSearch(): void {
    this.search.emit(this.searchParams);
  }

  public clear() {
    this.search.emit(new TargetSearchParams());
  }
}
