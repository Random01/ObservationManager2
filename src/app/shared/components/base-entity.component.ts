import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

import { BaseComponent } from './base-component';
import { Entity } from '../models/entity.model';

@Component({ template: '' })
export abstract class BaseEntityComponent<T extends Entity> extends BaseComponent {

  protected readonly router = inject(Router);
  protected readonly route = inject(ActivatedRoute);

  protected readonly itemSubject = new BehaviorSubject<T>(null);
  public readonly item$ = this.itemSubject.asObservable();

  public goBack() {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'];
    if (returnUrl) {
      return this.router.navigateByUrl(returnUrl);
    } else {
      return this.router.navigate(['..'], { relativeTo: this.route });
    }
  }

}
