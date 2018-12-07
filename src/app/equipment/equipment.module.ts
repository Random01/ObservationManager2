import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { EquipmentComponent } from './equipment.component';
import { VendorService } from './shared/vendor.service';

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
    ],
    providers: [
        VendorService
    ]
})

export class EquipmentModule { }
