import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TargetsComponent } from './targets/targets.component';
import { AddTargetComponent } from './add-target/add-target.component';
import { EditTargetComponent } from './edit-target/edit-target.component';
import { AuthGuard } from '../auth/shared/auth.guard';

const targetsRoutes: Routes = [
  {
    path: 'objects',
    component: TargetsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'objects/new-object',
    component: AddTargetComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'objects/:id',
    component: EditTargetComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(targetsRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class TargetsRoutingModule { }
