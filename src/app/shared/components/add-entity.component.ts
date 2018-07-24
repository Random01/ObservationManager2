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
        return this.storageService.add(this.item)
            .then(() => {
                return this.createNew();
            })
            .then((item) => {
                this.item = item;
                this.endLoading();
            });
    }

    public createNew(): Promise<T> {
        return Promise.resolve(this.storageService.createNew());
    }

    public abstract goBack(): void;

    ngOnInit(): void {
        this.startLoading();
        this.createNew().then((item) => {
            this.item = item;
            this.endLoading();
        });
    }

}
