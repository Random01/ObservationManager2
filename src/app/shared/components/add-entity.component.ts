import { OnInit } from '@angular/core';

import { Entity } from '../models/entity.model';
import { StorageService } from '../services/storage.service';
import { BaseEntityComponent } from './base-entity.component';
import { AppContextService } from '../services/app-context.service';

export abstract class AddEntityComponent<T extends Entity> extends BaseEntityComponent<T> implements OnInit {

    constructor(
        protected storageService: StorageService<T>,
        appContext: AppContextService,
    ) {
        super(appContext);
    }

    public async addItem() {
        this.startLoading();

        try {
            await this.storageService.add(this.item);
            this.showSuccessMessage();
            this.goBack();
        } catch (error) {
            this.handleError(error);
        } finally {
            this.endLoading();
        }
    }

    public async addItemAndContinue() {
        this.startLoading();

        try {
            await this.storageService.add(this.item);
            this.showSuccessMessage();
            this.item = await this.createNew();
        } catch (error) {
            this.handleError(error);
        } finally {
            this.endLoading();
        }
    }

    public createNew(): Promise<T> {
        return Promise.resolve(this.storageService.createNew());
    }

    public abstract goBack(): void;

    public isValid(): boolean {
        return !!this.item?.isValid();
    }

    public async ngOnInit() {
        this.startLoading();

        try {
            this.item = await this.createNew();
        } catch (error) {
            this.handleError(error);
        } finally {
            this.endLoading();
        }
    }

    protected getSuccessMessage() {
        return 'A new item has been added';
    }

    protected showSuccessMessage() {
        this.appContext.messageService.info(this.getSuccessMessage());
    }

}
