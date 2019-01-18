import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { ObservingProgramsRoutingModule } from './observing-programs-routing.module';
import { AddObservingProgramComponent } from './add-observing-program/add-observing-program.component';
import { EditObservingProgramComponent } from './edit-observing-program/edit-observing-program.component';
import { ObservingProgramsComponent } from './observing-programs/observing-programs.component';
import { ObservingProgramsService } from './shared/observing-programs.service';
import { ObservingProgramComponent } from './observing-program/observing-program.component';
import { TargetsEditorComponent } from './targets-editor/targets-editor.component';
import { TargetModule } from '../target/target.module';
import { ObservingProgramStatisticsComponent } from './observing-program-statistics/observing-program-statistics.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MaterialModule,
        ObservingProgramsRoutingModule,
        TargetModule
    ],
    declarations: [
        AddObservingProgramComponent,
        EditObservingProgramComponent,
        ObservingProgramsComponent,
        ObservingProgramComponent,
        TargetsEditorComponent,
        ObservingProgramStatisticsComponent
    ],
    providers: [
        ObservingProgramsService
    ]
})

export class ObservingProgramsModule { }
