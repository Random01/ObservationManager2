import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ObservationsComponent } from './observations/observations.component';
import { EditObservationComponent } from './edit-observation/edit-observation.component';
import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ObservationsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':observationId',
    component: EditObservationComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ObservationsRoutingModule { }
