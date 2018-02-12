import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ObservationComponent } from './observation/observation.component';
import { ObservationsComponent } from './observations.component';
import { ObservationDetailComponent } from './observation-detail/observation-detail.component';

@NgModule({
    imports:[
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    declarations:[
        ObservationComponent,
        ObservationsComponent,
        ObservationDetailComponent
    ],
    exports:[
        ObservationComponent,
        ObservationsComponent,
        ObservationDetailComponent
    ],
    bootstrap:[
        ObservationComponent,
        ObservationsComponent,
        ObservationDetailComponent
    ]
})

export class ObservationModule {}