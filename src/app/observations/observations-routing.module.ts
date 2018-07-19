import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddObservationComponent } from './add-observation/add-observation.component';
import { ObservationsComponent } from './observations/observations.component';
import { EditObservationComponent } from './edit-observation/edit-observation.component';
import { SessionObservationsComponent } from './session-observations/session-observations.component';

const routes: Routes = [
    {
        path: 'observations/new-observation',
        component: AddObservationComponent
    },
    {
        path: 'observations/:observationId',
        component: EditObservationComponent
    },
    {
        path: 'observations',
        component: ObservationsComponent
    },
    {
        path: 'sessions/:sessionId/observations',
        component: SessionObservationsComponent
    },
    {
        path: 'sessions/:sessionId/observations/new-observation',
        component: AddObservationComponent
    },
    {
        path: 'sessions/:sessionId/observations/:observationId',
        component: EditObservationComponent
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
export class ObservationsRoutingModule { }
