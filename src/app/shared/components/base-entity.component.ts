import { Component } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { BaseComponent } from './base-component';
import { Entity } from '../models/entity.model';

@Component({ template: '' })
export abstract class BaseEntityComponent<T extends Entity> extends BaseComponent {

  protected readonly itemSubject = new BehaviorSubject<T>(null);
  public readonly item$ = this.itemSubject.asObservable();

}
