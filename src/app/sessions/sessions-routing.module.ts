import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SessionsComponent } from './sessions/sessions.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { AuthGuard } from '../auth/shared/auth.guard';
import { SessionObservationsComponent } from '../observations/session-observations';
import { AddObservationComponent } from '../observations/add-observation';

const routes: Routes = [
  {
    path: '',
    component: SessionsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new-session',
    component: AddSessionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':sessionId/observations/new-observation',
    component: AddObservationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':sessionId/observations',
    component: SessionObservationsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':sessionId',
    component: EditSessionComponent,
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
export class SessionsRoutingModule { }
