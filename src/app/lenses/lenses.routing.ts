import { Routes } from '@angular/router';

import { AuthGuard } from '../auth/shared/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./lenses/lenses.component').then(c => c.LensesComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'new-lens',
    loadComponent: () => import('./add-lens/add-lens.component').then(c => c.AddLensComponent),
    canActivate: [AuthGuard],
  },
  {
    path: ':lensId',
    loadComponent: () => import('./edit-lens/edit-lens.component').then(c => c.EditLensComponent),
    canActivate: [AuthGuard],
  },
];
