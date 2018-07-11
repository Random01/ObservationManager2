import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { EquipmentComponent } from './equipment.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        EquipmentComponent
    ],
    exports: [
        EquipmentComponent,
    ]
})

export class EquipmentModule { }
