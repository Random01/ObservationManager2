import { Routes } from '@angular/router';

import { AuthGuard } from '../auth/shared/auth.guard';

export const scopesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./scopes/scopes.component').then(c => c.ScopesComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'new-scope',
    loadComponent: () => import('./add-scope/add-scope.component').then(c => c.AddScopeComponent),
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    loadComponent: () => import('./edit-scope/edit-scope.component').then(c => c.EditScopeComponent),
    canActivate: [AuthGuard],
  },
];
