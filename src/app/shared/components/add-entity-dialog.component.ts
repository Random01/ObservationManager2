import { Component, Inject, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Entity } from '../models/models';
import { StorageService } from '../services/storage.service';

@Component({ template: '' })
export abstract class AddEntityDialogComponent<TEntity extends Entity, SType extends StorageService<TEntity>> implements OnInit {

  protected readonly itemSubject = new BehaviorSubject<TEntity | null>(null);
  public readonly item$ = this.itemSubject.asObservable();

  constructor(
    @Inject('storageService') protected readonly storageService: SType,
    @Inject('dialogRef') protected readonly dialogRef: any,
  ) { }

  public addItem(): void {
    const item = this.itemSubject.getValue();
    if (item) {
      this.storageService.add(item).then(result => {
        this.dialogRef.close(result.payload);
      });
    }
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public isValid() {
    return !!this.itemSubject.getValue()?.isValid();
  }

  public ngOnInit(): void {
    this.itemSubject.next(this.storageService.createNew());
  }

}
