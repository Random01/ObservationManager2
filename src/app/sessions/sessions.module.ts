import { NgModule } from '@angular/core';

import { SessionsComponent } from './sessions.component';
import { SessionComponent } from './session/session.component';
import { SessionDetailsComponent } from './session-details/session-details.component';

@NgModule({
    declarations:[
        SessionsComponent,
        SessionComponent,
        SessionDetailsComponent
    ],
    exports: [
        SessionsComponent,
        SessionComponent,
        SessionDetailsComponent
    ],
    bootstrap: [
        SessionsComponent,
        SessionComponent,
        SessionDetailsComponent
    ]
})

export class SessionsModule {}