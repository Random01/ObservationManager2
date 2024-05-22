import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BaseAdminComponentStore } from './base-admin-component.store';
import { Column } from './column.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'om-base-admin',
  templateUrl: 'base-admin.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseAdminComponent<T = any> {

  @Input({ required: true }) public displayedColumns: string[] | null = [];

  @Input({ required: true }) public columns: Column[] | null = [];

  constructor(
    private readonly store: BaseAdminComponentStore<T>,
  ) { }

  public readonly items$ = this.store.items$;

  public readonly displayedColumns$ = new BehaviorSubject<string[] | null>([]);

  public remove(item: T): void { }

  public add(): void { }

}
