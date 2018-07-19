import { OnInit } from '@angular/core';

import { Entity } from '../models/entity.model';
import { StorageService } from '../services/storage.service';
import { BaseEntityComponent } from './base-entity.component';

export abstract class AddEntityComponent<T extends Entity> extends BaseEntityComponent<T> implements OnInit {

    constructor(protected storageService: StorageService<T>) {
        super();
    }

    public addItem() {
        this.startLoading();
        this.storageService.add(this.item).then(() => {
            this.endLoading();
            this.goBack();
        });
    }

    public addItemAndContinue() {
        this.startLoading();
        this.storageService.add(this.item).then(() => {
            this.item = this.storageService.createNew();
            this.endLoading();
        });
    }

    public abstract goBack(): void;

    ngOnInit(): void {
        this.item = this.storageService.createNew();
    }

}
