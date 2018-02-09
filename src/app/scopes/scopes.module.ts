import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { ScopesComponent } from './scopes.component';
import { ScopeComponent } from './scope/scope.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        ScopesComponent,
        ScopeComponent
    ],
    bootstrap: [ScopesComponent, ScopeComponent]
})

export class ScopesModule { }