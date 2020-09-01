import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TargetSearchParams } from './target-search-params.model';

@Component({
    selector: 'om-target-search-params',
    templateUrl: './target-search-params.component.html',
    styleUrls: [
        './target-search-params.component.css'
    ],
})
export class TargetSearchParamsComponent {

    @Input() searchParams: TargetSearchParams;
    @Output() search = new EventEmitter<TargetSearchParams>();

    onSearch(): void {
        this.search.emit(this.searchParams);
    }
}
