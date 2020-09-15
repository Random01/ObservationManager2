import { Injectable } from '@angular/core';

import { MessageService } from './message.service';
import { LoggingService } from './logging.service';

@Injectable({ providedIn: 'root' })
export class AppContextService {

    constructor(
        public readonly messageService: MessageService,
        public readonly logger: LoggingService,
    ) { }

}
