import { Component, Inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef, inject } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { BehaviorSubject } from 'rxjs';

import { Entity } from '../models/models';
import { StorageService } from '../services/storage.service';
import { DIALOG_REF_TOKEN, DIALOG_STORAGE_SERVICE_TOKEN } from './dialog-tokens';

@Component({
  template: '',
})
export abstract class AddEntityDialogComponent<TEntity extends Entity, SType extends StorageService<TEntity>> implements OnInit {
  protected readonly itemSubject = new BehaviorSubject<TEntity | null>(null);
  public readonly item$ = this.itemSubject.asObservable();

  protected readonly destroyRef = inject(DestroyRef);
  constructor(
    @Inject(DIALOG_STORAGE_SERVICE_TOKEN) protected readonly storageService: SType,
    @Inject(DIALOG_REF_TOKEN) protected readonly dialogRef: MatDialogRef<any>,
  ) { }

  public addItem(): void {
    const item = this.itemSubject.getValue();
    if (item) {
      this.storageService
        .add(item)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((result) => this.dialogRef.close(result.payload));
    }
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public isValid() {
    return !!this.itemSubject.getValue()?.isValid();
  }

  public ngOnInit(): void {
    this.itemSubject.next(new this.storageService.createNew());
  }
}
