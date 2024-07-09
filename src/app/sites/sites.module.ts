import { NgModule } from '@angular/core';

import { SitesRoutingModule } from './sites-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SitesRoutingModule,
    SharedModule,
  ],
})
export class SiteModule { }
