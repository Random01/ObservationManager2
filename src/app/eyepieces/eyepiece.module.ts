import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatInputModule } from '@angular/material';

import { EyepiecesComponent } from './eyepieces.component';
import { EyepieceComponent } from './eyepiece/eyepiece.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        MatButtonModule,
        MatInputModule
    ],
    declarations: [
        EyepiecesComponent,
        EyepieceComponent
    ],
    bootstrap: [
        EyepiecesComponent
    ]
})

export class EyepieceModule { }
