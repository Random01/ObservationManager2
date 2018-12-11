import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { ScopesComponent } from './scopes/scopes.component';
import { ScopeComponent } from './scope/scope.component';
import { AddScopeComponent } from './add-scope/add-scope.component';
import { EditScopeComponent } from './edit-scope/edit-scope.component';
import { ScopeService } from './shared/scope.service';
import { ScopesRoutingModule } from './scopes-routing.module';
import { EquipmentModule } from '../equipment/equipment.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        ScopesRoutingModule,
        EquipmentModule,
        MaterialModule
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
