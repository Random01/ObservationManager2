import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';
import { ObservingProgramsRoutingModule } from './observing-programs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ObservingProgramsRoutingModule,
  ],
})
export class ObservingProgramsModule { }
