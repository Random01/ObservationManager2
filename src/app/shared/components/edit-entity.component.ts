import { Component, OnInit } from '@angular/core';

import { Entity } from '../models/entity.model';
import { StorageService } from '../services/storage.service';
import { BaseEntityComponent } from './base-entity.component';
import { AppContextService } from '../services/app-context.service';

@Component({ template: '' })
export abstract class EditEntityComponent<T extends Entity> extends BaseEntityComponent<T> implements OnInit {

  constructor(
    protected readonly storageService: StorageService<T>,
    appContext: AppContextService,
  ) {
    super(appContext);
  }

  public async updateItem() {
    this.startLoading();
    try {
      const item = this.itemSubject.getValue();
      await this.storageService.update(item);
      this.goBack();
    } catch (error) {
      this.handleError(error, 'Unable to update item');
    } finally {
      this.endLoading();
    }
  }

  public abstract goBack(): void;

  public ngOnInit(): void {
    this.startLoading();

    this.storageService.getById(this.getItemId())
      .then(item => this.itemSubject.next(item))
      .catch(err => this.handleError(err, 'Unable to load items'))
      .finally(() => this.endLoading());
  }

  public isValid(): boolean {
    const item = this.itemSubject.getValue();
    return item?.isValid();
  }

  protected abstract getItemId(): string;

}
