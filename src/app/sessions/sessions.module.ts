import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatNativeDateModule, MatInputModule, MatDatepickerModule } from '@angular/material';

import { SessionsComponent } from './sessions.component';
import { SessionComponent } from './session/session.component';
import { SessionDetailsComponent } from './session-details/session-details.component';

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
        MatNativeDateModule
    ],
    declarations: [
        SessionsComponent,
        SessionComponent,
        SessionDetailsComponent
    ],
    exports: [
        SessionsComponent,
        SessionComponent,
        SessionDetailsComponent,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule
    ],
    bootstrap: [
        SessionsComponent,
        SessionComponent,
        SessionDetailsComponent
    ]
})

export class SessionsModule { }
