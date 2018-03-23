import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule, MatListItem } from '@angular/material/list';

import { FiltersComponent } from './filters.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        RouterModule,
        MatDividerModule,
        MatListModule
    ],
    declarations: [
        FiltersComponent,
        FilterComponent
    ],
    bootstrap: [
        FiltersComponent,
        FilterComponent
    ]
})

export class FilterModule { }
