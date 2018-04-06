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

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule
    ],
    declarations: [
        ObservationComponent,
        ObservationsComponent,
        ObservationDetailComponent,
        ObservationDialogComponent
    ],
    exports: [
        ObservationComponent,
        ObservationsComponent,
        ObservationDetailComponent,
        ObservationDialogComponent
    ],
    bootstrap: [
        ObservationComponent,
        ObservationsComponent,
        ObservationDetailComponent,
        ObservationDialogComponent
    ],
    entryComponents: [
        ObservationDialogComponent
    ]
})

export class ObservationModule { }
