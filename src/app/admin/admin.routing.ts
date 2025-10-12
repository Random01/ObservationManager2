import { AdminGuard } from '../auth/shared';

export const adminRoutes = [
  {
    path: '',
    loadComponent: () => import('./admin.component').then((m) => m.AdminComponent),
  },
  {
    path: 'vendors',
    loadComponent: () => import('./vendors/vendors.component').then((m) => m.VendorsComponent),
    canActivate: [AdminGuard],
  },
  {
    path: 'filter-types',
    loadComponent: () => import('./filter-types/filter-types.component').then((m) => m.FilterTypesComponent),
    canActivate: [AdminGuard],
  },
  {
    path: 'constellations',
    loadComponent: () => import('./constellations/constellations.component').then((m) => m.ConstellationsComponent),
    canActivate: [AdminGuard],
  },
];
