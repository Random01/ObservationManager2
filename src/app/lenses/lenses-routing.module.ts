import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LensesComponent } from './lenses/lenses.component';
import { AddLensComponent } from './add-lens/add-lens.component';
import { EditLensComponent } from './edit-lens/edit-lens.component';
import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LensesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new-lens',
    component: AddLensComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':lensId',
    component: EditLensComponent,
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
export class LensesRoutingModule { }
