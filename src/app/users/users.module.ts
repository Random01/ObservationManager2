import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    UsersRoutingModule,
    MaterialModule,
  ],
})
export class UsersModule { }
