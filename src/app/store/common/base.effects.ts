
import { inject, Injectable } from '@angular/core';

import { LoggingService } from 'app/shared/services/logging.service';
import { MessageService } from 'app/shared/services/message.service';

@Injectable()
export abstract class BaseEffects {
  protected readonly messageService = inject(MessageService);
  protected readonly loggingService = inject(LoggingService);

  protected handleError(error: Error, message: string) {
    this.loggingService.error(error);
    this.messageService.error(message);
  }
}
