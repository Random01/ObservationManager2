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
            }
        ])
    ],
    declarations: [
        AppComponent,
        SiteComponent,
        SitesComponent,
        ObservationsComponent,
        ObservationDetailComponent,
        ObservationComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
