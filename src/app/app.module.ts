import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { SiteComponent } from './sites/site/site.component';
import { SitesComponent } from './sites/sites.component';

import { ObservationsComponent } from './observations/observations.component';

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
            }
        ])
    ],
    declarations: [
        AppComponent,
        SiteComponent,
        SitesComponent,
        ObservationsComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
