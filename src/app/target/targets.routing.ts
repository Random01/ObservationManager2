import { Routes } from '@angular/router';

import { AuthGuard } from '../auth/shared/auth.guard';

export const targetsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./targets/targets.component').then(c => c.TargetsComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'new-object',
    loadComponent: () => import('./add-target/add-target.component').then(c => c.AddTargetComponent),
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    loadComponent: () => import('./edit-target/edit-target.component').then(c => c.EditTargetComponent),
    canActivate: [AuthGuard],
  },
];
