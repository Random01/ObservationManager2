import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import {
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatAutocompleteModule
} from '@angular/material';

import { EquipmentComponent } from './equipment.component';
import { VendorService } from './shared/vendor.service';
import { VendorSelectorComponent } from './vendor-selector/vendor-selector.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        RouterModule,
        MatPaginatorModule,
        MatAutocompleteModule
    ],
    declarations: [
        EquipmentComponent,
        VendorSelectorComponent
    ],
    exports: [
        EquipmentComponent,
        VendorSelectorComponent
    ],
    providers: [
        VendorService
    ]
})

export class EquipmentModule { }
