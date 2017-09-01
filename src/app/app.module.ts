import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ScopeComponent } from './scopes/scope/scope.component';
import { ScopesComponent } from './scopes/scopes.component';

import { SiteComponent } from './sites/site/site.component';
import { SitesComponent } from './sites/sites.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'scopes',
                component: ScopesComponent
            },
            {
                path: 'sites',
                component: SitesComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        ScopeComponent,
        ScopesComponent,
        SiteComponent,
        SitesComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
