import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { EquipmentComponent } from './equipment/equipment.component';

const routes: Routes = [
    {
        path: 'equipment',
        component: EquipmentComponent
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: true }
        )
    ]
})
export class AppRoutingModule { }
