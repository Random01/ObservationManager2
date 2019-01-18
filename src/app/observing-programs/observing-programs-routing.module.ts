import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AddObservingProgramComponent } from './add-observing-program/add-observing-program.component';
import { EditObservingProgramComponent } from './edit-observing-program/edit-observing-program.component';
import { ObservingProgramsComponent } from './observing-programs/observing-programs.component';
import { ObservingProgramStatisticsComponent } from './observing-program-statistics/observing-program-statistics.component';

const routes: Routes = [
    {
        path: 'observing-programs/new-observing-program',
        component: AddObservingProgramComponent
    },
    {
        path: 'observing-programs/:programId',
        component: EditObservingProgramComponent
    },
    {
        path: 'observing-programs',
        component: ObservingProgramsComponent
    },
    {
        path: 'observing-programs/statistics/:programId',
        component: ObservingProgramStatisticsComponent
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
export class ObservingProgramsRoutingModule { }
