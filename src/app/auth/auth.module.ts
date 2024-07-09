import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    MaterialModule,
  ],
})
export class AuthModule { }
