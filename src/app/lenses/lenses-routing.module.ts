import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LensesComponent } from './lenses/lenses.component';
import { AddLensComponent } from './add-lens/add-lens.component';
import { EditLensComponent } from './edit-lens/edit-lens.component';

const reoutes: Routes = [
    { path: 'lenses', component: LensesComponent },
    { path: 'lenses/new-lens', component: AddLensComponent },
    { path: 'lenses/:lensId', component: EditLensComponent }
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
