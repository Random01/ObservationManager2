import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import {
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule
} from '@angular/material';

import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './shared/authentication.service';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { UsersModule } from '../users/users.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        UsersModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthenticationService,
        AuthenticationService
    ]
})

export class AuthModule { }
