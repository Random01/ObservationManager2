import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { SiteComponent } from './sites/site/site.component';
import { SitesComponent } from './sites/sites.component';

import { ObservationsComponent } from './observations/observations.component';
import { ObservationDetailComponent } from './observations/observation-detail/observation-detail.component';
import { ObservationComponent } from './observations/observation/observation.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ScopesComponent } from './scopes/scopes.component';
import { ScopeComponent } from './scopes/scope/scope.component';
import { EyepiecesComponent } from './eyepieces/eyepieces.component';

import { SessionsComponent } from './sessions/sessions.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'sites',
                component: SitesComponent
            },
            {
                path: 'observations',
                component: ObservationsComponent
            },
            {
                path: 'observation',
                component: ObservationDetailComponent
            },
            {
                path: 'equipment',
                component: EquipmentComponent
            },
            {
                path: 'scopes',
                component: ScopesComponent
            },
            {
                path: 'eyepieces',
                component: EyepiecesComponent
            },
            {
                path: 'sessions',
                component: SessionsComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        SiteComponent,
        SitesComponent,
        ObservationsComponent,
        ObservationDetailComponent,
        ObservationComponent,
        EquipmentComponent,
        ScopesComponent,
        ScopeComponent,
        EyepiecesComponent,
        SessionsComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
