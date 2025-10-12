import { Routes } from '@angular/router';

import { AuthGuard } from '../auth/shared/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./observing-programs/observing-programs.component').then(c => c.ObservingProgramsComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'new-observing-program',
    loadComponent: () => import('./add-observing-program/add-observing-program.component').then(c => c.AddObservingProgramComponent),
    canActivate: [AuthGuard],
  },
  {
    path: ':programId',
    loadComponent: () => import('./edit-observing-program/edit-observing-program.component').then(c => c.EditObservingProgramComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'statistics/:programId',
    loadComponent: () => import('./observing-program-statistics/observing-program-statistics.component').then(c => c.ObservingProgramStatisticsComponent),
    canActivate: [AuthGuard],
  }
];
