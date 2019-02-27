import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LensesComponent } from './lenses/lenses.component';
import { AddLensComponent } from './add-lens/add-lens.component';
import { EditLensComponent } from './edit-lens/edit-lens.component';
import { AuthGuardService } from '../auth/shared/auth-guard.service';

const reoutes: Routes = [
    {
        path: 'lenses',
        component: LensesComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'lenses/new-lens',
        component: AddLensComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'lenses/:lensId',
        component: EditLensComponent,
        canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(reoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LensesRoutingModule { }
