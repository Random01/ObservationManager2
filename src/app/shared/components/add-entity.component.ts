import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Entity } from '../models/entity.model';
import { StorageService } from '../services/storage.service';
import { BaseEntityComponent } from './base-entity.component';
import { AppContextService } from '../services/app-context.service';

@Component({ template: '' })
export abstract class AddEntityComponent<T extends Entity> extends BaseEntityComponent<T> implements OnInit {

  constructor(
    protected readonly storageService: StorageService<T>,
    appContext: AppContextService,
    protected readonly cdRef?: ChangeDetectorRef,
  ) {
    super(appContext);
  }

  public async addItem() {
    this.startLoading();

    try {
      const item = this.itemSubject.getValue();
      await this.storageService.add(item);
      this.showSuccessMessage();
      this.goBack();
    } catch (error) {
      this.handleError(error, 'Unable to add a new item');
    } finally {
      this.endLoading();
    }
  }

  public async addItemAndContinue() {
    this.startLoading();

    try {
      const item = this.itemSubject.getValue();
      await this.storageService.add(item);
      this.showSuccessMessage();

      const newItem = await this.createNew();
      this.itemSubject.next(newItem);
    } catch (error) {
      this.handleError(error, 'Unable to add a new item');
    } finally {
      this.endLoading();
    }
  }

  public createNew(params?: Partial<T>): Promise<T> {
    return Promise.resolve(this.storageService.createNew(params));
  }

  public abstract goBack(): void;

  public isValid(): boolean {
    const item = this.itemSubject.getValue();
    return !!item?.isValid();
  }

  public async ngOnInit() {
    this.startLoading();

    try {
      const item = await this.createNew();
      this.itemSubject.next(item);
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
