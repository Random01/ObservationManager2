import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { EquipmentComponent } from './equipment/equipment.component';
import { AdminGuard } from './auth/shared';

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
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: !environment.production },
    )
  ],
})
export class AppRoutingModule { }
