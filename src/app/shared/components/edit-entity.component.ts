import { Component, OnInit } from '@angular/core';

import { finalize } from 'rxjs';

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

  public updateItem(): void {
    this.startLoading();

    this.handle(
      this.storageService.update(this.itemSubject.getValue())
        .pipe(finalize(() => this.endLoading()))
        .subscribe({
          complete: () => this.goBack(),
          error: error => this.handleError(error, 'Unable to update item'),
        }),
    );
  }

  public abstract goBack(): void;

  public ngOnInit(): void {
    this.startLoading();

    this.handle(
      this.storageService.getById(this.getItemId())
        .pipe(finalize(() => this.endLoading()))
        .subscribe({
          next: item => this.itemSubject.next(item),
          error: error => this.handleError(error, 'Unable to load items'),
        })
    );
  }

  public isValid(): boolean {
    const item = this.itemSubject.getValue();
    return item?.isValid();
  }

  protected abstract getItemId(): string;

}
