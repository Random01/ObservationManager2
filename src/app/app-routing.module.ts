import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScopesComponent } from './scopes/scopes.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionDetailsComponent } from './sessions/session-details/session-details.component';
import { ObservationsComponent } from './observations/observations.component';
import { ObservationDetailComponent } from './observations/observation-detail/observation-detail.component';

const routes: Routes = [
  {
    path: 'scopes',
    component: ScopesComponent
  },
  {
    path: 'sessions',
    component: SessionsComponent
  },
  {
    path: 'session',
    component: SessionDetailsComponent
  },
  {
    path: 'observations',
    component: ObservationsComponent
  },
  {
    path: 'observation/:id',
    component: ObservationDetailComponent
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
