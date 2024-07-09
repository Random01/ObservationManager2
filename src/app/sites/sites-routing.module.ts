import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SitesComponent } from './sites/sites.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { EditSiteComponent } from './edit-site/edit-site.component';
import { AuthGuard } from '../auth/shared/auth.guard';

const sitesRoutes: Routes = [
  {
    path: '',
    component: SitesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new-site',
    component: AddSiteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
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
