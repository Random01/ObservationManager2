import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ScopeComponent } from './scopes/scope/scope.component';
import { ScopesComponent } from './scopes/scopes.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ScopeComponent,
        ScopesComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
