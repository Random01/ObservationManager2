import { NgModule } from '@angular/core';

import { MessageService } from './services/message.service';
import { DegreesSelectorComponent } from './components/degrees-input/degrees-input.component';

@NgModule({
    declarations: [
        DegreesSelectorComponent
    ],
    exports: [
        DegreesSelectorComponent
    ],
    providers: [
        MessageService
    ]
})

export class SharedModule { }
