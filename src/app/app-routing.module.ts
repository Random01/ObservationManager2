import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScopesComponent } from './scopes/scopes.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionDetailsComponent } from './sessions/session-details/session-details.component';

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
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
