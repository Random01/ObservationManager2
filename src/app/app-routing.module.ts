import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { EquipmentComponent } from './equipment/equipment.component';
import { AdminGuard, AuthGuard } from './auth/shared';
import { PageNotFoundComponent } from './page-not-found';

const routes: Routes = [
  {
    path: 'equipment',
    component: EquipmentComponent,
  },
  {
    path: 'observing-programs',
    loadChildren: () => import('./observing-programs/observing-programs.module')
      .then(m => m.ObservingProgramsModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
    canActivate: [AdminGuard],
  },
  {
    path: 'sites',
    loadChildren: () => import('./sites/sites.module')
      .then(m => m.SiteModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'scopes',
    loadChildren: () => import('./scopes/scopes.module')
      .then(m => m.ScopesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'eyepieces',
    loadChildren: () => import('./eyepieces/eyepiece.module')
      .then(m => m.EyepieceModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'filters',
    loadChildren: () => import('./filters/filters.module')
      .then(m => m.FilterModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'lenses',
    loadChildren: () => import('./lenses/lenses.module')
      .then(m => m.LensesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'objects',
    loadChildren: () => import('./target/target.module')
      .then(m => m.TargetModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'sessions',
    loadChildren: () => import('./sessions/sessions.module')
      .then(m => m.SessionsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module')
      .then(m => m.UsersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'observations',
    loadChildren: () => import('./observations/observations.module')
      .then(m => m.ObservationsModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'observations',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: !environment.production },
    )
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
