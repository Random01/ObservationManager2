import { Routes } from '@angular/router';

import { AuthGuard } from '../auth/shared/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./filters/filters.component').then(c => c.FiltersComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'new-filter',
    loadComponent: () => import('./add-filter/add-filter.component').then(c => c.AddFilterComponent),
    canActivate: [AuthGuard],
  },
  {
    path: ':filterId',
    loadComponent: () => import('./edit-filter/edit-filter.component').then(c => c.EditFilterComponent),
    canActivate: [AuthGuard],
  },
];
