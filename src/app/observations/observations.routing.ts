import { Routes } from '@angular/router';

import { AuthGuard } from '../auth/shared/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./observations/observations.component').then((c) => c.ObservationsComponent),
    canActivate: [AuthGuard],
  },
  {
    path: ':observationId',
    loadComponent: () => import('./edit-observation/edit-observation.component').then((c) => c.EditObservationComponent),
    canActivate: [AuthGuard],
  },
];
