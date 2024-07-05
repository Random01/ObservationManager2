import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VendorsComponent } from './vendors';
import { AdminComponent } from './admin.component';
import { FilterTypesComponent } from './filter-types';
import { ConstellationsComponent } from './constellations';
import { AdminGuard } from '../auth/shared';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'vendors',
    component: VendorsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'filter-types',
    component: FilterTypesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'constellations',
    component: ConstellationsComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
