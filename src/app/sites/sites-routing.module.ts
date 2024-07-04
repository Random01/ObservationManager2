import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SitesComponent } from './sites/sites.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { EditSiteComponent } from './edit-site/edit-site.component';
import { AuthGuard } from '../auth/shared/auth.guard';

const sitesRoutes: Routes = [
  {
    path: 'sites',
    component: SitesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sites/new-site',
    component: AddSiteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sites/:id',
    component: EditSiteComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(sitesRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SitesRoutingModule { }
