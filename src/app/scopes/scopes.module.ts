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

import { ScopesComponent } from './scopes/scopes.component';
import { ScopeComponent } from './scope/scope.component';
import { AddScopeComponent } from './add-scope/add-scope.component';
import { EditScopeComponent } from './edit-scope/edit-scope.component';
import { ScopeService } from './shared/scope.service';
import { ScopesRoutingModule } from './scopes-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        RouterModule,
        ScopesRoutingModule
    ],
    declarations: [
        ScopesComponent,
        ScopeComponent,
        AddScopeComponent,
        EditScopeComponent
    ],
    providers: [
        ScopeService
    ]
})

export class ScopesModule { }
