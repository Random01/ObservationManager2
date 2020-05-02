import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TargetSelectorComponent } from './target-selector/target-selector.component';
import { TargetsRoutingModule } from './targets-routing.module';
import { TargetsComponent } from './targets/targets.component';
import { AddTargetComponent } from './add-target/add-target.component';
import { EditTargetComponent } from './edit-target/edit-target.component';
import { TargetComponent } from './target/target.component';
import { MaterialModule } from '../shared/material.module';
import { ConstellationSelectorComponent } from './constellation-selector/constellation-selector.component';
import { TargetTypeSelectorComponent } from './target-type-selector/target-type-selector.component';
import { DeclinationSelectorComponent } from './declination-selector/declination-selector.component';
import { RightAscensionSelectorComponent } from './right-ascension-selector/right-ascension-selector.component';
import { AliasesEditorComponent } from './aliases-editor/aliases-editor.component';
import { TargetSearchParamsComponent } from './target-search-params/target-search-params.component';
import { TargetTypeFormatterPipe } from './shared/pipes/target-type-formatter.pipe';
import { AddTargetDialogService, AddTargetDialogComponent } from './target-selector/add-target-dialog';

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
        TargetSelectorComponent,
        AddTargetComponent,
        EditTargetComponent,
        TargetsComponent,
        TargetComponent,
        ConstellationSelectorComponent,
        TargetTypeSelectorComponent,
        DeclinationSelectorComponent,
        RightAscensionSelectorComponent,
        AliasesEditorComponent,
        TargetSearchParamsComponent,
        TargetTypeFormatterPipe,
        AddTargetDialogComponent
    ],
    exports: [
        TargetSelectorComponent,
        TargetTypeFormatterPipe
    ],
    entryComponents: [
        AddTargetDialogComponent
    ],
    providers: [
        AddTargetDialogService
    ]
})

export class TargetModule { }
