import { NgModule } from '@angular/core';

import { FiltersRoutingModule } from './filters-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    FiltersRoutingModule,
    SharedModule,
  ],
})
export class FilterModule { }
