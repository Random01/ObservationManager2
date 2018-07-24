import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FiltersComponent } from './filters/filters.component';
import { AddFilterComponent } from './add-filter/add-filter.component';
import { EditFilterComponent } from './edit-filter/edit-filter.component';

const routes: Routes = [
    {
        path: 'filters/new-filter',
        component: AddFilterComponent
    },
    {
        path: 'filters/:filterId',
        component: EditFilterComponent
    },
    {
        path: 'filters',
        component: FiltersComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class FiltersRoutingModule { }
