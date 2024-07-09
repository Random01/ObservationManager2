import { NgModule } from '@angular/core';

import { LensesRoutingModule } from './lenses-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    LensesRoutingModule,
    SharedModule,
  ],
})
export class LensesModule { }
