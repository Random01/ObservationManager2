import { OnInit, Output, EventEmitter, Input, Component, Inject, ChangeDetectorRef } from '@angular/core';

import { MatLegacySelectChange as MatSelectChange } from '@angular/material/legacy-select';

import { StorageService } from '../../services/storage.service';
import { Entity } from '../../models/models';
import { AddNewEntityDialogService } from '../../services/add-new-entity-dialog.service';

@Component({ template: '' })
export class EntitySelectorComponent<T extends Entity, S extends StorageService<T>> implements OnInit {

  private _item: T | null;

  @Input()
  public get item(): T {
    return this._item;
  }

  public set item(item: T) {
    this._item = item;
  }

  @Output()
  public readonly itemChange = new EventEmitter<T>();

  public items: T[] = [];

  public placeholder = '';

  constructor(
    @Inject('service') protected readonly service: S,
    @Inject('dialogService') protected readonly dialogService: AddNewEntityDialogService<T>,
    protected readonly cdRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this.loadAll();
  }

  public getCompareWithFn(e1: Entity, e2: Entity): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }

  public onItemSelected(item?: T) {
    if (!this.getCompareWithFn(this.item, item)) {
      this.item = item;
      this.itemChange.emit(item);
    }
  }

  public onSelectionChange(event: MatSelectChange) {
    this.onItemSelected(event.value);
  }

  public openDialog(): void {
    this.dialogService.openDialog().then(result => {
      this.items = [result, ...this.items];
      this.onItemSelected(result);
    }, () => { });
  }

  private loadAll(): void {
    this.service.getAll().then(items => {
      this.items = items;
      this.cdRef.markForCheck();
    });
  }
}
