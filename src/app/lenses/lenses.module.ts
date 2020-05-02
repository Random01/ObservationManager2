import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LensComponent } from './lens/lens.component';
import { AddLensComponent } from './add-lens/add-lens.component';
import { LensesComponent } from './lenses/lenses.component';
import { EditLensComponent } from './edit-lens/edit-lens.component';
import { LensesRoutingModule } from './lenses-routing.module';
import { EquipmentModule } from '../equipment/equipment.module';
import { MaterialModule } from '../shared/material.module';
import { LensSelectorComponent } from './lens-selector';
import { AddLensDialogService, AddLensDialogComponent } from './add-lens-dialog';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        LensesRoutingModule,
        EquipmentModule,
        MaterialModule
    ],
    declarations: [
        LensesComponent,
        LensComponent,
        AddLensComponent,
        EditLensComponent,
        LensSelectorComponent,
        AddLensDialogComponent
    ],
    exports: [
        LensSelectorComponent
    ],
    entryComponents: [
        AddLensDialogComponent
    ],
    providers: [
        AddLensDialogService
    ]
})

export class LensesModule { }
