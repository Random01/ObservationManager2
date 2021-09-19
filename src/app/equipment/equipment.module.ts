import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { EquipmentComponent } from './equipment.component';
import { VendorSelectorComponent } from './vendor-selector/vendor-selector.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        RouterModule,
        MaterialModule,
    ],
    declarations: [
        EquipmentComponent,
        VendorSelectorComponent,
    ],
    exports: [
        EquipmentComponent,
        VendorSelectorComponent,
    ],
})
export class EquipmentModule { }
