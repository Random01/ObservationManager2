import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';

import {
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatTooltipModule,
    MatListModule,
    MatCheckboxModule,
    MAT_TOOLTIP_DEFAULT_OPTIONS,
    MatExpansionModule
} from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule,
        MatTooltipModule,
        MatListModule,
        MatCheckboxModule,
        MatExpansionModule
    ],
    providers: [
        { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: 1000 }
    ]
})

export class MaterialModule { }
