import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import {
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule
} from '@angular/material';

import { EyepiecesComponent } from './eyepieces/eyepieces.component';
import { EyepieceComponent } from './eyepiece/eyepiece.component';
import { EyepieceService } from './shared/eyepiece.service';
import { AddEyepieceComponent } from './add-eyepiece/add-eyepiece.component';
import { EditEyepieceComponent } from './edit-eyepiece/edit-eyepiece.component';
import { EyepiecesRoutingModule } from './eyepieces-routing.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        EyepiecesRoutingModule
    ],
    declarations: [
        EyepiecesComponent,
        EyepieceComponent,
        AddEyepieceComponent,
        EditEyepieceComponent
    ],
    providers: [
        EyepieceService
    ]
})

export class EyepieceModule { }
