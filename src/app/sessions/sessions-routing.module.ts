import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SessionsComponent } from './sessions/sessions.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { AddSessionComponent } from './add-session/add-session.component';

const routes: Routes = [
    {
        path: 'sessions',
        component: SessionsComponent
    },
    {
        path: 'sessions/new-session',
        component: AddSessionComponent
    },
    {
        path: 'sessions/:sessionId',
        component: EditSessionComponent
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
export class SessionsRoutingModule { }
