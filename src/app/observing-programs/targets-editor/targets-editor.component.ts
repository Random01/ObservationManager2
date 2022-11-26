import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChange,
} from '@angular/core';
import { LegacyPageEvent as PageEvent } from '@angular/material/legacy-paginator';

import { Target } from '../../shared/models/models';

@Component({
    selector: 'om-targets-editor',
    templateUrl: './targets-editor.component.html',
    styleUrls: ['./targets-editor.component.css']
})
export class TargetsEditorComponent implements OnChanges {

    public currentPage = 0;
    public pageSize = 10;
    public pageSizeOptions = [5, 10];
    public paginatedTargets: Target[];
    public totalCount = 0;

    @Input() public targets: Target[];
    @Output() public readonly targetsChange = new EventEmitter<Target[]>();

    public readonly displayedColumns: string[] = [
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

    onPageChanged(pageEvent: PageEvent): void {
        this.currentPage = pageEvent.pageIndex;
        this.pageSize = pageEvent.pageSize;
        this.updateList();
    }

    updateList(): void {
        this.paginatedTargets = this.targets.slice(
            this.currentPage * this.pageSize,
            this.currentPage * this.pageSize + this.pageSize);
    }

    ngOnChanges(_: { [propKey: string]: SimpleChange }) {
        this.updateList();
    }
}
