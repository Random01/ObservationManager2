import { Component, inject } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { DestroyableComponent } from './destroyable.component';
import { MessageService } from '../services/message.service';

@Component({ template: '' })
export class BaseComponent extends DestroyableComponent {

  protected readonly isLoadingSubject = new BehaviorSubject(false);
  public readonly isLoading$ = this.isLoadingSubject.asObservable();

  protected readonly messageService = inject(MessageService);
  protected readonly logger = inject(MessageService);

  public startLoading(): void {
    this.isLoadingSubject.next(true);
  }

  public endLoading(): void {
    this.isLoadingSubject.next(false);
  }

  protected handleError(error: any, errorMessage?: string): void {
    this.messageService.error(errorMessage || error);
    this.logger.error(error);
  }

}
