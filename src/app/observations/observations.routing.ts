import { Routes } from '@angular/router';

import { AuthGuard } from '../auth/shared/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./observation/observation.component').then(c => c.ObservationComponent),
    canActivate: [AuthGuard],
  },
  {
    path: ':observationId',
    loadComponent: () => import('./edit-observation/edit-observation.component').then(c => c.EditObservationComponent),
    canActivate: [AuthGuard],
  },
];
