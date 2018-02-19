import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { EyepiecesComponent } from './eyepieces.component';

@NgModule({
    imports:[
        CommonModule,
        BrowserModule,
        FormsModule
    ],
    declarations: [
        EyepiecesComponent
    ]
})

export class EyepieceModule { }