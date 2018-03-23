import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatListModule, MatListItem } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { EyepiecesComponent } from './eyepieces.component';
import { EyepieceComponent } from './eyepiece/eyepiece.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatInputModule,
        MatListModule
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
