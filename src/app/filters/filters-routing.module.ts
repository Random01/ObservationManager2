import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FiltersComponent } from './filters/filters.component';
import { AddFilterComponent } from './add-filter/add-filter.component';
import { EditFilterComponent } from './edit-filter/edit-filter.component';
import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: FiltersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new-filter',
    component: AddFilterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':filterId',
    component: EditFilterComponent,
    canActivate: [AuthGuard],
  },
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
