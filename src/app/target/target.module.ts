import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule, MatAutocompleteModule } from '@angular/material';

import { TargetSearchComponent } from './target-search/target-search.component';
import { TargetSelectorComponent } from './target-selector/target-selector.component';
import { TargetService } from './shared/target.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatAutocompleteModule
    ],
    declarations: [
        TargetSearchComponent,
        TargetSelectorComponent
    ],
    exports: [
        TargetSearchComponent,
        TargetSelectorComponent
    ],
    providers: [
        TargetService
    ]
})

export class TargetModule { }
