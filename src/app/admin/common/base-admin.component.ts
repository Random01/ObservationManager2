import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { BaseAdminComponentStore } from './base-admin-component.store';
import { Column } from './column.interface';

import { AsyncPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'om-base-admin',
  templateUrl: 'base-admin.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTableModule, MatButtonModule, MatIconModule, AsyncPipe],
})
export class BaseAdminComponent<T = any> {
  @Input({ required: true }) public displayedColumns: string[] | null = [];

  @Input({ required: true }) public columns: Column[] | null = [];

  constructor(private readonly store: BaseAdminComponentStore<T>) {}

  public readonly items$ = this.store.items$;

  public readonly displayedColumns$ = new BehaviorSubject<string[] | null>([]);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public remove(_item: T): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public add(): void {}
}
