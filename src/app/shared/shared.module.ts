import { NgModule } from '@angular/core';

import { MessageService } from './services/message.service';

@NgModule({
    providers: [
        MessageService
    ]
})

export class SharedModule { }
