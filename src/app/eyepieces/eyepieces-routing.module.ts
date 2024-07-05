import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { EyepiecesComponent } from './eyepieces/eyepieces.component';
import { AddEyepieceComponent } from './add-eyepiece/add-eyepiece.component';
import { EditEyepieceComponent } from './edit-eyepiece/edit-eyepiece.component';
import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: EyepiecesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new-eyepiece',
    component: AddEyepieceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: EditEyepieceComponent,
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
export class EyepiecesRoutingModule { }
