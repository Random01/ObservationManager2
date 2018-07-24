import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';

import {
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule
} from '@angular/material';

import { FiltersComponent } from './filters/filters.component';
import { FilterComponent } from './filter/filter.component';
import { FiltersRoutingModule } from './filters-routing.module';
import { EditFilterComponent } from './edit-filter/edit-filter.component';
import { AddFilterComponent } from './add-filter/add-filter.component';
import { FilterService } from './shared/filter.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        RouterModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        MatSelectModule,
        FiltersRoutingModule
    ],
    declarations: [
        FiltersComponent,
        FilterComponent,
        AddFilterComponent,
        EditFilterComponent
    ],
    providers: [
        FilterService
    ]
})

export class FilterModule { }
