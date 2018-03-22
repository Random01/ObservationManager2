import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FiltersComponent } from './filters.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule
    ],
    declarations: [
        FiltersComponent
    ]
})

export class FilterModule { }
