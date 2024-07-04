import { Component, Inject, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Entity } from '../models/models';
import { StorageService } from '../services/storage.service';
import { DestroyableComponent } from './destroyable.component';

@Component({ template: '' })
export abstract class AddEntityDialogComponent<TEntity extends Entity, SType extends StorageService<TEntity>>
  extends DestroyableComponent implements OnInit {

  protected readonly itemSubject = new BehaviorSubject<TEntity | null>(null);
  public readonly item$ = this.itemSubject.asObservable();

  constructor(
    @Inject('storageService') protected readonly storageService: SType,
    @Inject('dialogRef') protected readonly dialogRef: any,
  ) {
    super();
  }

  public addItem(): void {
    const item = this.itemSubject.getValue();
    if (item) {
      this.handle(
        this.storageService.add(item)
          .subscribe(result => this.dialogRef.close(result.payload))
      );
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
