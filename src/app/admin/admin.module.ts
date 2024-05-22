import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { VendorsComponent } from './vendors';
import { FilterTypesComponent } from './filter-types';
import { ConstellationsComponent } from './constellations';
import { BaseAdminComponent } from './common/base-admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterLinkActive,
    MaterialModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminComponent,
    VendorsComponent,
    FilterTypesComponent,
    ConstellationsComponent,
    BaseAdminComponent,
  ],
})
export class AdminModule { }
