import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TargetSearchComponent } from './target-search/target-search.component';
import { TargetSelectorComponent } from './target-selector/target-selector.component';
import { TargetService } from './shared/target.service';
import { TargetsRoutingModule } from './targets-routing.module';
import { TargetsComponent } from './targets/targets.component';
import { AddTargetComponent } from './add-target/add-target.component';
import { EditTargetComponent } from './edit-target/edit-target.component';
import { TargetComponent } from './target/target.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        TargetsRoutingModule,
        MaterialModule
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
