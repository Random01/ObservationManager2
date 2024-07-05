import { NgModule } from '@angular/core';

import { ScopesRoutingModule } from './scopes-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    ScopesRoutingModule,
    SharedModule,
  ],
})
export class ScopesModule { }
