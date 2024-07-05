import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
  ],
})
export class AdminModule { }
