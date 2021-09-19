import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { EyepiecesComponent } from './eyepieces/eyepieces.component';
import { EyepieceComponent } from './eyepiece/eyepiece.component';
import { AddEyepieceComponent } from './add-eyepiece/add-eyepiece.component';
import { EditEyepieceComponent } from './edit-eyepiece/edit-eyepiece.component';
import { EyepiecesRoutingModule } from './eyepieces-routing.module';
import { EquipmentModule } from '../equipment/equipment.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { EyepieceSelectorComponent } from './eyepiece-selector';
import { AddEyepieceDialogComponent } from './add-eyepiece-dialog';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        EyepiecesRoutingModule,
        EquipmentModule,
        MaterialModule,
        SharedModule,
    ],
    declarations: [
        EyepiecesComponent,
        EyepieceComponent,
        AddEyepieceComponent,
        EditEyepieceComponent,
        EyepieceSelectorComponent,
        AddEyepieceDialogComponent,
    ],
    exports: [
        EyepieceSelectorComponent,
    ],
    providers: []
})

export class EyepieceModule { }
