import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { TargetsComponent } from './targets/targets.component';
import { AddTargetComponent } from './add-target/add-target.component';
import { EditTargetComponent } from './edit-target/edit-target.component';
import { AuthGuardService } from '../auth/shared/auth-guard.service';

const targetsRoutes: Routes = [
    {
        path: 'objects',
        component: TargetsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'objects/new-object',
        component: AddTargetComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'objects/:id',
        component: EditTargetComponent,
        canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(targetsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TargetsRoutingModule { }
