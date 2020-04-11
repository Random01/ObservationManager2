import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { ScopesComponent } from './scopes/scopes.component';
import { ScopeComponent } from './scope/scope.component';
import { AddScopeComponent } from './add-scope/add-scope.component';
import { EditScopeComponent } from './edit-scope/edit-scope.component';
import { ScopesRoutingModule } from './scopes-routing.module';
import { EquipmentModule } from '../equipment/equipment.module';
import { MaterialModule } from '../shared/material.module';
import { ScopeSelectorComponent } from './scope-selector';
import { AddScopeDialogService, AddScopeDialogComponent } from './add-scope-dialog';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        ScopesRoutingModule,
        EquipmentModule,
        MaterialModule,
    ],
    declarations: [
        ScopesComponent,
        ScopeComponent,
        AddScopeComponent,
        EditScopeComponent,
        ScopeSelectorComponent,
        AddScopeDialogComponent,
    ],
    exports: [
        ScopeSelectorComponent,
    ],
    providers: [
        AddScopeDialogService,
    ],
    entryComponents: [
        AddScopeDialogComponent,
    ]
})

export class ScopesModule { }
