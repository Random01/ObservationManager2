import { Component } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { AppContextService } from '../services';
import { DestroyableComponent } from './destroyable.component';

@Component({ template: '' })
export class BaseComponent extends DestroyableComponent {

  protected readonly isLoadingSubject = new BehaviorSubject(false);
  public readonly isLoading$ = this.isLoadingSubject.asObservable();

  constructor(
    protected readonly appContext: AppContextService,
  ) {
    super();
  }

  public startLoading(): void {
    this.isLoadingSubject.next(true);
  }

  public endLoading(): void {
    this.isLoadingSubject.next(false);
  }

  protected handleError(error: any, errorMessage?: string): void {
    this.appContext.messageService.error(errorMessage || error);
    this.appContext.logger.error(error);
  }

}
