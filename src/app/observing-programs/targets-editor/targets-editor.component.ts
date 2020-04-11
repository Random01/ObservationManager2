import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

import { Target } from '../../shared/models/models';

interface PageChangedEvent {
    length: number;
    pageIndex: number;
    pageSize: number;
    previousPageIndex: number;
}

@Component({
    selector: 'om-targets-editor',
    templateUrl: './targets-editor.component.html',
    styleUrls: ['./targets-editor.component.css']
})
export class TargetsEditorComponent implements OnChanges {

    currentPage = 0;
    pageSize = 10;
    pageSizeOptions = [5, 10];
    paginatedTargets: Target[];
    totalCount = 0;

    @Input() targets: Target[];
    @Output() targetsChange: EventEmitter<Target[]> = new EventEmitter();

    displayedColumns: string[] = [
        'name',
        'actions',
    ];

    newTarget: Target;

    addNewTarget(): void {
        if (this.newTarget) {
            this.targets = [...this.targets, this.newTarget];
            this.newTarget = null;
            this.targetsChange.emit(this.targets);
        }
    }

    removeTarget(target: Target): void {
        const index = this.targets.indexOf(target);
        this.targets.splice(index, 1);
        this.targets = [...this.targets];
        this.targetsChange.emit(this.targets);
    }

    onPageChanged(pageEvent: PageChangedEvent): void {
        this.currentPage = pageEvent.pageIndex;
        this.pageSize = pageEvent.pageSize;
        this.updateList();
    }

    updateList(): void {
        this.paginatedTargets = this.targets.slice(
            this.currentPage * this.pageSize,
            this.currentPage * this.pageSize + this.pageSize);
    }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        this.updateList();
    }
}
