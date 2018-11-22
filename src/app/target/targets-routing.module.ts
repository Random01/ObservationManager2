import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { TargetsComponent } from './targets/targets.component';
import { AddTargetComponent } from './add-target/add-target.component';
import { EditTargetComponent } from './edit-target/edit-target.component';

const targetsRoutes: Routes = [
    {
        path: 'objects',
        component: TargetsComponent
    },
    {
        path: 'objects/new-object',
        component: AddTargetComponent
    },
    {
        path: 'objects/:id',
        component: EditTargetComponent
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
