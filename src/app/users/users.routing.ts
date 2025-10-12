import { AuthGuard } from '../auth/shared/auth.guard';

export const usersRoutes = [
  {
    path: '',
    loadComponent: () => import('./users/users.component').then(m => m.UsersComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadComponent: () => import('./user-profile/user-profile.component').then(m => m.UserProfileComponent),
    canActivate: [AuthGuard],
  },
];
