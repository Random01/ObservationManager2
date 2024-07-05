import { NgModule } from '@angular/core';

import { ObservationsRoutingModule } from './observations-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ObservationsRoutingModule,
    SharedModule,
  ],
})
export class ObservationsModule { }
