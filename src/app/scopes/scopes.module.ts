import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import {
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule
} from '@angular/material';

import { ScopesComponent } from './scopes.component';
import { ScopeComponent } from './scope/scope.component';
import { AddScopeComponent } from './add-scope/add-scope.component';
import { EditScopeComponent } from './edit-scope/edit-scope.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        RouterModule
    ],
    declarations: [
        ScopesComponent,
        ScopeComponent,
        AddScopeComponent,
        EditScopeComponent
    ],
    bootstrap: [
        ScopesComponent,
        ScopeComponent,
        AddScopeComponent,
        EditScopeComponent
    ]
})

export class ScopesModule { }
