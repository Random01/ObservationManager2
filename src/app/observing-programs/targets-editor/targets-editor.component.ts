import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange, ChangeDetectionStrategy } from '@angular/core';

import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { Target } from '../../shared/models/models';
import { TargetSelectorComponent } from '../../target/target-selector/target-selector.component';

@Component({
  selector: 'om-targets-editor',
  templateUrl: 'targets-editor.component.html',
  styleUrls: ['targets-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatPaginatorModule, MatTableModule, MatIconModule, MatButtonModule, TargetSelectorComponent],
})
export class TargetsEditorComponent implements OnChanges {
  public currentPage = 0;
  public pageSize = 10;
  public pageSizeOptions = [5, 10];
  public paginatedTargets: Target[] = [];
  public totalCount = 0;

  @Input() public targets?: Target[];
  @Output() public readonly targetsChange = new EventEmitter<Target[]>();

  public readonly displayedColumns: string[] = ['name', 'actions'];

  public newTarget: Target | null = null;

  public addNewTarget(): void {
    if (this.newTarget) {
      this.targets = [...(this.targets ?? []), this.newTarget];
      this.newTarget = null;
      this.updateList();
      this.targetsChange.emit(this.targets);
    }
  }

  public removeTarget(target: Target): void {
    const index = this.targets?.indexOf(target) ?? -1;
    if (this.targets && index >= 0) {
      this.targets = this.targets.filter((_, itemIndex) => itemIndex !== index);
      this.updateList();
      this.targetsChange.emit(this.targets);
    }
  }

  public onPageChanged(pageEvent: PageEvent): void {
    this.currentPage = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    this.updateList();
  }

  public ngOnChanges(_: Record<string, SimpleChange>) {
    this.updateList();
  }

  private updateList(): void {
    const targets = this.targets ?? [];
    const lastPage = Math.max(0, Math.ceil(targets.length / this.pageSize) - 1);
    this.currentPage = Math.min(this.currentPage, lastPage);
    const start = this.currentPage * this.pageSize;
    this.paginatedTargets = targets.slice(start, start + this.pageSize);
  }
}
