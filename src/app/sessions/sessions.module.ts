import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../shared/material.module';

import { SessionsComponent } from './sessions/sessions.component';
import { SessionComponent } from './session/session.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { SessionsRoutingModule } from './sessions-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SessionInfoComponent } from './session-info/session-info.component';
import { SiteModule } from '../sites/site.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NoopAnimationsModule,
        SessionsRoutingModule,
        SharedModule,
        MaterialModule,
        SiteModule
    ],
    declarations: [
        SessionsComponent,
        SessionComponent,
        SessionDetailsComponent,
        AddSessionComponent,
        EditSessionComponent,
        SessionInfoComponent
    ],
    exports: [
        SessionInfoComponent,
    ],
})

export class SessionsModule { }
