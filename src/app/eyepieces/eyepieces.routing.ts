import { Routes } from '@angular/router';

import { AuthGuard } from '../auth/shared/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./eyepieces/eyepieces.component').then((c) => c.EyepiecesComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'new-eyepiece',
    loadComponent: () => import('./add-eyepiece/add-eyepiece.component').then((c) => c.AddEyepieceComponent),
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    loadComponent: () => import('./edit-eyepiece/edit-eyepiece.component').then((c) => c.EditEyepieceComponent),
    canActivate: [AuthGuard],
  },
];
