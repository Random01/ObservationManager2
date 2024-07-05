import { NgModule } from '@angular/core';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SessionsRoutingModule,
    SharedModule,
  ],
})
export class SessionsModule { }
