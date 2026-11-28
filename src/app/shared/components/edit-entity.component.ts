import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { finalize } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef, inject } from '@angular/core';

import { Entity } from '../models/entity.model';
import { StorageService } from '../services/storage.service';
import { BaseEntityComponent } from './base-entity.component';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export abstract class EditEntityComponent<T extends Entity> extends BaseEntityComponent<T> implements OnInit {
  protected readonly destroyRef = inject(DestroyRef);
  constructor(protected readonly storageService: StorageService<T>) {
    super();
  }

  public updateItem(): void {
    const item = this.itemSubject.getValue();
    if (!item) {
      return;
    }
    this.startLoading();

    this.storageService
      .update(item)
      .pipe(
        finalize(() => this.endLoading()),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        complete: () => this.goBack(),
        error: (error) => this.handleError(error, 'Unable to update item'),
      });
  }

  public ngOnInit(): void {
    this.startLoading();

    this.storageService
      .getById(this.getItemId())
      .pipe(
        finalize(() => this.endLoading()),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (item) => this.itemSubject.next(item),
        error: (error) => this.handleError(error, 'Unable to load items'),
      });
  }

  public isValid(): boolean {
    const item = this.itemSubject.getValue();
    return !!item?.isValid();
  }

  protected abstract getItemId(): string;
}
