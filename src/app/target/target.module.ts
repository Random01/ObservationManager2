import { NgModule } from '@angular/core';

import { TargetsRoutingModule } from './targets-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    TargetsRoutingModule,
    SharedModule,
  ],
})
export class TargetModule { }
