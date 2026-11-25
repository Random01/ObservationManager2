import { Component, inject, signal } from '@angular/core';

import { MessageService } from '../services/message.service';

@Component({ template: '' })
export class BaseComponent {
  public readonly isLoading = signal<boolean>(false);

  protected readonly messageService = inject(MessageService);
  protected readonly logger = inject(MessageService);

  public startLoading(): void {
    this.isLoading.set(true);
  }

  public endLoading(): void {
    this.isLoading.set(false);
  }

  protected handleError(error: any, errorMessage?: string): void {
    this.messageService.error(errorMessage || error);
    this.logger.error(error);
  }
}
