import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { EyepiecesComponent } from './eyepieces/eyepieces.component';
import { AddEyepieceComponent } from './add-eyepiece/add-eyepiece.component';
import { EditEyepieceComponent } from './edit-eyepiece/edit-eyepiece.component';

const routes: Routes = [
    {
        path: 'eyepieces',
        component: EyepiecesComponent
    },
    {
        path: 'eyepieces/new-eyepiece',
        component: AddEyepieceComponent
    },
    {
        path: 'eyepieces/:id',
        component: EditEyepieceComponent
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
export class EyepiecesRoutingModule { }
