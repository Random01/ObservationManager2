import { NgModule } from '@angular/core';

import { SessionsComponent } from './sessions.component';
import { SessionDetailsComponent } from './session-details/session-details.component';

@NgModule({
    declarations:[
        SessionsComponent,
        SessionDetailsComponent
    ],
    exports: [
        SessionsComponent,
        SessionDetailsComponent
    ]
})

export class SessionsModule {}