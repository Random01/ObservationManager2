import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScopesComponent } from './scopes/scopes.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionDetailsComponent } from './sessions/session-details/session-details.component';
import { ObservationsComponent } from './observations/observations.component';
import { ObservationDetailComponent } from './observations/observation-detail/observation-detail.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { SitesComponent } from './sites/sites.component';
import { EyepiecesComponent } from './eyepieces/eyepieces.component';
import { FiltersComponent } from './filters/filters.component';

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
    path: 'session/:id',
    component: SessionDetailsComponent
  },
  {
    path: 'observations',
    component: ObservationsComponent
  },
  {
    path: 'observation/:id',
    component: ObservationDetailComponent
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
