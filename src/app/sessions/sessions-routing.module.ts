import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SessionsComponent } from './sessions/sessions.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { AuthGuardService } from '../auth/shared/auth-guard.service';

const routes: Routes = [
    {
        path: 'sessions',
        component: SessionsComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'sessions/new-session',
        component: AddSessionComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'sessions/:sessionId',
        component: EditSessionComponent,
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
export class SessionsRoutingModule { }
