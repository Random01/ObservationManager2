import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import {
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
} from '@angular/material';

import { LensComponent } from './lens/lens.component';
import { AddLensComponent } from './add-lens/add-lens.component';
import { LensService } from './shared/lens.service';
import { LensesComponent } from './lenses/lenses.component';
import { EditLensComponent } from './edit-lens/edit-lens.component';
import { LensesRoutingModule } from './lenses-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        RouterModule,
        MatPaginatorModule,
        LensesRoutingModule
    ],
    declarations: [
        LensesComponent,
        LensComponent,
        AddLensComponent,
        EditLensComponent
    ],
    providers: [
        LensService
    ]
})

export class LensesModule { }
