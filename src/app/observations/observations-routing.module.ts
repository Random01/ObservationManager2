import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddObservationComponent } from './add-observation/add-observation.component';
import { ObservationsComponent } from './observations/observations.component';
import { EditObservationComponent } from './edit-observation/edit-observation.component';
import { SessionObservationsComponent } from './session-observations/session-observations.component';
import { AuthGuardService } from '../auth/shared/auth-guard.service';

const routes: Routes = [
    {
        path: 'observations/new-observation',
        component: AddObservationComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'observations/:observationId',
        component: EditObservationComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'observations',
        component: ObservationsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'sessions/:sessionId/observations',
        component: SessionObservationsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'sessions/:sessionId/observations/new-observation',
        component: AddObservationComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'sessions/:sessionId/observations/:observationId',
        component: EditObservationComponent,
        canActivate: [AuthGuardService]
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
