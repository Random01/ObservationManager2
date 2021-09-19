import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { EyepiecesComponent } from './eyepieces/eyepieces.component';
import { AddEyepieceComponent } from './add-eyepiece/add-eyepiece.component';
import { EditEyepieceComponent } from './edit-eyepiece/edit-eyepiece.component';
import { AuthGuardService } from '../auth/shared/auth-guard.service';

const routes: Routes = [
    {
        path: 'eyepieces',
        component: EyepiecesComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'eyepieces/new-eyepiece',
        component: AddEyepieceComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'eyepieces/:id',
        component: EditEyepieceComponent,
        canActivate: [AuthGuardService],
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
