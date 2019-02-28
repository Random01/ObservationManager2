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

        this.storageService
            .add(this.item)
            .then(
                () => this.goBack(),
                () => this.endLoading()
            );
    }

    public async addItemAndContinue() {
        this.startLoading();

        try {
            await this.storageService.add(this.item);
            this.item = await this.createNew();
        } finally {
            this.endLoading();
        }
    }

    public createNew(): Promise<T> {
        return Promise.resolve(this.storageService.createNew());
    }

    public abstract goBack(): void;

    public isValid(): boolean {
        return this.item != null && this.item.isValid();
    }

    ngOnInit(): void {
        this.startLoading();
        this.createNew().then((item) => {
            this.item = item;
            this.endLoading();
        });
    }

}
