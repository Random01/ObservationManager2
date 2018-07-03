import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatNativeDateModule, MatInputModule, MatDatepickerModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

import { SessionsComponent } from './sessions.component';
import { SessionComponent } from './session/session.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { EditSessionComponent } from './edit-session/edit-session.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule
    ],
    declarations: [
        SessionsComponent,
        SessionComponent,
        SessionDetailsComponent,
        AddSessionComponent,
        EditSessionComponent
    ],
    exports: [
        SessionsComponent,
        SessionComponent,
        SessionDetailsComponent,
        AddSessionComponent,
        EditSessionComponent
    ],
    bootstrap: [
        SessionsComponent,
        SessionComponent,
        SessionDetailsComponent,
        AddSessionComponent,
        EditSessionComponent
    ]
})

export class SessionsModule { }
