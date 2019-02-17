import { OnInit, Output, EventEmitter, Input } from '@angular/core';

import { StorageService } from '../../services/storage.service';
import { Entity } from '../../models/models';
import { MatSelectChange } from '@angular/material';

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
        private service: S
    ) {
    }

    ngOnInit(): void {
        this.service.getAll().then(items => this.items = items);
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

    openPopup(): void {

    }
}
