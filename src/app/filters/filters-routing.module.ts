import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FiltersComponent } from './filters/filters.component';
import { AddFilterComponent } from './add-filter/add-filter.component';
import { EditFilterComponent } from './edit-filter/edit-filter.component';
import { AuthGuardService } from '../auth/shared/auth-guard.service';

const routes: Routes = [
    {
        path: 'filters/new-filter',
        component: AddFilterComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'filters/:filterId',
        component: EditFilterComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'filters',
        component: FiltersComponent,
        canActivate: [AuthGuardService],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class FiltersRoutingModule { }
