import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
} from '@angular/material';

import { TargetSearchComponent } from './target-search/target-search.component';
import { TargetSelectorComponent } from './target-selector/target-selector.component';
import { TargetService } from './shared/target.service';
import { TargetsRoutingModule } from './targets-routing.module';
import { TargetsComponent } from './targets/targets.component';
import { AddTargetComponent } from './add-target/add-target.component';
import { EditTargetComponent } from './edit-target/edit-target.component';
import { TargetComponent } from './target/target.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        TargetsRoutingModule,
        MatPaginatorModule
    ],
    declarations: [
        TargetSearchComponent,
        TargetSelectorComponent,
        AddTargetComponent,
        EditTargetComponent,
        TargetsComponent,
        TargetComponent
    ],
    exports: [
        TargetSearchComponent,
        TargetSelectorComponent
    ],
    providers: [
        TargetService
    ]
})

export class TargetModule { }
