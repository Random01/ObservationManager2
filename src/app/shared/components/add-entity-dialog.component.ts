import { Directive, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { MatDialogRef } from '@angular/material/dialog';

import { BehaviorSubject } from 'rxjs';

import { Entity } from '../models/models';
import { StorageService } from '../services/storage.service';

@Directive()
export abstract class AddEntityDialogComponent<TEntity extends Entity, SType extends StorageService<TEntity>> implements OnInit {
  protected readonly itemSubject = new BehaviorSubject<TEntity | null>(null);
  public readonly item$ = this.itemSubject.asObservable();

  protected readonly destroyRef = inject(DestroyRef);
  constructor(
    protected readonly storageService: SType,
    protected readonly dialogRef: MatDialogRef<unknown, Entity>,
  ) {}

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
