import { NgModule } from '@angular/core';
import { DecimalPipe, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DegreesInputComponent } from './components/degrees-input/degrees-input.component';
import { MaterialModule } from './material.module';
import { DateTimeInputComponent } from './components/date-time-input/date-time-input.component';
import { DeleteEntityDialogService } from './components/delete-entity-dialog/delete-entity-dialog.service';
import { DeleteEntityDialogComponent } from './components/delete-entity-dialog/delete-entity-dialog.component';
import { DegreesFormatter } from './models/pipes/degrees-formatter.pipe';
import { EyepieceFocalLengthPipe } from './models/pipes/eyepiece-focal-length-formatter.pipe';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    entryComponents: [
        DeleteEntityDialogComponent
    ],
    declarations: [
        DegreesInputComponent,
        DateTimeInputComponent,
        DegreesFormatter,
        EyepieceFocalLengthPipe,
        DeleteEntityDialogComponent
    ],
    exports: [
        DegreesInputComponent,
        DateTimeInputComponent,
        DegreesFormatter,
        EyepieceFocalLengthPipe
    ],
    providers: [
        DecimalPipe
    ]
})

export class SharedModule { }
