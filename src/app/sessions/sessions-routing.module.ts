import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SessionsComponent } from './sessions/sessions.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
  {
    path: 'sessions',
    component: SessionsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sessions/new-session',
    component: AddSessionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sessions/:sessionId',
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
