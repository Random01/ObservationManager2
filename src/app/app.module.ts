import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SiteComponent } from './observation/site/site.component';
import { ScopeComponent } from './observation/scope/scope.component';
import { ScopesComponent } from './observation/scopes/scopes.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        SiteComponent,
        ScopeComponent,
        ScopesComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
