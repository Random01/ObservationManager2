import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScopesComponent } from './scopes/scopes.component';
import { SessionsComponent } from './sessions/sessions.component';
import { ObservationsComponent } from './observations/observations.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { SitesComponent } from './sites/sites.component';
import { EyepiecesComponent } from './eyepieces/eyepieces.component';
import { FiltersComponent } from './filters/filters.component';
import { AddScopeComponent } from './scopes/add-scope/add-scope.component';
import { EditScopeComponent } from './scopes/edit-scope/edit-scope.component';
import { EditSessionComponent } from './sessions/edit-session/edit-session.component';
import { AddSessionComponent } from './sessions/add-session/add-session.component';
import { AddObservationComponent } from './observations/add-observation/add-observation.component';
import { EditObservationComponent } from './observations/edit-observation/edit-observation.component';

const routes: Routes = [
  {
    path: 'scopes',
    component: ScopesComponent
  },
  {
    path: 'scopes/new-scope',
    component: AddScopeComponent
  },
  {
    path: 'scopes/:id',
    component: EditScopeComponent
  },
  {
    path: 'sessions/new-session',
    component: AddSessionComponent
  },
  {
    path: 'sessions/:id',
    component: EditSessionComponent
  },
  {
    path: 'sessions',
    component: SessionsComponent
  },
  {
    path: 'observations/new-observation',
    component: AddObservationComponent
  },
  {
    path: 'observations',
    component: ObservationsComponent
  },
  {
    path: 'observations/:id',
    component: EditObservationComponent
  },
  {
    path: 'equipment',
    component: EquipmentComponent
  },
  {
    path: 'sites',
    component: SitesComponent
  },
  {
    path: 'eyepieces',
    component: EyepiecesComponent
  },
  {
    path: 'filters',
    component: FiltersComponent
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
