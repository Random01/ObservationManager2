import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { EditObservingProgramComponent } from './edit-observing-program/edit-observing-program.component';
import { ObservingProgramStatisticsComponent } from './observing-program-statistics/observing-program-statistics.component';
import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadComponent:()=>import('./observing-programs/observing-programs.component').then(c=>c.ObservingProgramsComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'new-observing-program',
    loadComponent: ()=>import('./add-observing-program/add-observing-program.component').then(c=>c.AddObservingProgramComponent),
    canActivate: [AuthGuard],
  },
  {
    path: ':programId',
    component: EditObservingProgramComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'statistics/:programId',
    component: ObservingProgramStatisticsComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ObservingProgramsRoutingModule { }
