import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatInputModule } from '@angular/material';

import { ScopesComponent } from './scopes.component';
import { ScopeComponent } from './scope/scope.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MatButtonModule,
        MatInputModule
    ],
    declarations: [
        ScopesComponent,
        ScopeComponent
    ],
    bootstrap: [
        ScopesComponent,
        ScopeComponent
    ]
})

export class ScopesModule { }
