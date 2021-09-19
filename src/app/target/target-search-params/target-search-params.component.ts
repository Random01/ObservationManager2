import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TargetSearchParams } from './target-search-params.model';

@Component({
  selector: 'om-target-search-params',
  templateUrl: './target-search-params.component.html',
  styleUrls: [
    './target-search-params.component.css',
  ],
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
