import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

import { ObservationComponent } from './observation/observation.component';
import { ObservationsComponent } from './observations.component';
import { ObservationDetailComponent } from './observation-detail/observation-detail.component';
import { ObservationDialogComponent } from './observation-dialog/observation-dialog.component';
import { AddObservationComponent } from './add-observation/add-observation.component';
import { TargetModule } from '../target/target.module';
import { EditObservationComponent } from './edit-observation/edit-observation.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        TargetModule
    ],
    declarations: [
        ObservationComponent,
        ObservationsComponent,
        ObservationDetailComponent,
        ObservationDialogComponent,
        AddObservationComponent,
        EditObservationComponent
    ],
    exports: [
        ObservationComponent,
        ObservationsComponent,
        ObservationDetailComponent,
        ObservationDialogComponent,
        AddObservationComponent,
        EditObservationComponent
    ],
    bootstrap: [
        ObservationComponent,
        ObservationsComponent,
        ObservationDetailComponent,
        ObservationDialogComponent,
        AddObservationComponent
    ],
    entryComponents: [
        ObservationDialogComponent
    ]
})

export class ObservationModule { }
