import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AddObservingProgramComponent } from './add-observing-program/add-observing-program.component';
import { EditObservingProgramComponent } from './edit-observing-program/edit-observing-program.component';
import { ObservingProgramsComponent } from './observing-programs/observing-programs.component';
import { ObservingProgramStatisticsComponent } from './observing-program-statistics/observing-program-statistics.component';
import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ObservingProgramsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new-observing-program',
    component: AddObservingProgramComponent,
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
