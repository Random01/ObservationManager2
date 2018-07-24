import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import {
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule
} from '@angular/material';

import { ObservationComponent } from './observation/observation.component';
import { ObservationsComponent } from './observations/observations.component';
import { ObservationDetailComponent } from './observation-detail/observation-detail.component';
import { ObservationDialogComponent } from './observation-dialog/observation-dialog.component';
import { AddObservationComponent } from './add-observation/add-observation.component';
import { TargetModule } from '../target/target.module';
import { EditObservationComponent } from './edit-observation/edit-observation.component';
import { SessionObservationsComponent } from './session-observations/session-observations.component';
import { ObservationService } from './shared/observation.service';
import { ObservationsRoutingModule } from './observations-routing.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        TargetModule,
        MatTableModule,
        MatIconModule,
        MatSliderModule,
        ObservationsRoutingModule
    ],
    declarations: [
        ObservationComponent,
        ObservationsComponent,
        ObservationDetailComponent,
        ObservationDialogComponent,
        AddObservationComponent,
        EditObservationComponent,
        SessionObservationsComponent
    ],
    entryComponents: [
        ObservationDialogComponent
    ],
    providers: [
        ObservationService
    ]
})

export class ObservationsModule { }
