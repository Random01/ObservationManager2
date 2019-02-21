import { OnInit, Output, EventEmitter, Input } from '@angular/core';

import { StorageService } from '../../services/storage.service';
import { Entity } from '../../models/models';
import { MatSelectChange } from '@angular/material';
import { AddNewEntityDialogService } from '../../services/add-new-entity-dialog.service';

export class EntitySelectorComponent<T extends Entity, S extends StorageService<T>> implements OnInit {

    private _item: T;

    @Input()
    public get item(): T {
        return this._item;
    }

    public set item(item: T) {
        this._item = item;
    }

    @Output()
    public itemChange: EventEmitter<T> = new EventEmitter();

    public items: T[];

    public placeholder: string;

    constructor(
        protected service: S,
        protected dialogService: AddNewEntityDialogService<T, S>,
    ) {
    }

    ngOnInit(): void {
        this.loadAll();
    }

    getCompareWithFn(e1: Entity, e2: Entity): boolean {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    }

    onItemSelected(item?: T) {
        if (!this.getCompareWithFn(this.item, item)) {
            this.item = item;
            this.itemChange.emit(item);
        }
    }

    onSelectionChange(event: MatSelectChange) {
        this.onItemSelected(event.value);
    }

    openDialog(): void {
        this.dialogService.openDialog().then((result) => {
            this.items = [result, ...this.items];
            this.onItemSelected(result);
        }, () => { });
    }

    loadAll(): void {
        this.service.getAll().then(items => this.items = items);
    }
}
