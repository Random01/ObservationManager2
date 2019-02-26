import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { FiltersComponent } from './filters/filters.component';
import { FilterComponent } from './filter/filter.component';
import { FiltersRoutingModule } from './filters-routing.module';
import { EditFilterComponent } from './edit-filter/edit-filter.component';
import { AddFilterComponent } from './add-filter/add-filter.component';
import { FilterService } from './shared/filter.service';
import { EquipmentModule } from '../equipment/equipment.module';
import { MaterialModule } from '../shared/material.module';
import { FilterSelectorComponent } from './filter-selector';
import { AddFilterDialogService, AddFilterDialogComponent } from './add-filter-dialog';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        FiltersRoutingModule,
        EquipmentModule,
        MaterialModule
    ],
    declarations: [
        FiltersComponent,
        FilterComponent,
        AddFilterComponent,
        EditFilterComponent,
        FilterSelectorComponent,
        AddFilterDialogComponent
    ],
    exports: [
        FilterSelectorComponent
    ],
    entryComponents: [
        AddFilterDialogComponent
    ],
    providers: [
        FilterService,
        AddFilterDialogService
    ]
})

export class FilterModule { }
