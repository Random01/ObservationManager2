import { Routes } from '@angular/router';

import { AuthGuard } from '../auth/shared/auth.guard';

export const sitesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./sites/sites.component').then(c => c.SitesComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'new-site',
    loadComponent: () => import('./add-site/add-site.component').then(c => c.AddSiteComponent),
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    loadComponent: () => import('./edit-site/edit-site.component').then(c => c.EditSiteComponent),
    canActivate: [AuthGuard],
  },
];
