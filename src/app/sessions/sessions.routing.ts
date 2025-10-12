import { Routes } from '@angular/router';

import { AuthGuard } from '../auth/shared/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./sessions/sessions.component').then((c) => c.SessionsComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'new-session',
    loadComponent: () => import('./add-session/add-session.component').then((c) => c.AddSessionComponent),
    canActivate: [AuthGuard],
  },
  {
    path: ':sessionId/observations/new-observation',
    loadComponent: () => import('../observations/add-observation').then((c) => c.AddObservationComponent),
    canActivate: [AuthGuard],
  },
  {
    path: ':sessionId/observations',
    loadComponent: () => import('../observations/session-observations').then((c) => c.SessionObservationsComponent),
    canActivate: [AuthGuard],
  },
  {
    path: ':sessionId',
    loadComponent: () => import('./edit-session/edit-session.component').then((c) => c.EditSessionComponent),
    canActivate: [AuthGuard],
  },
];
