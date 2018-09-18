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
import { AuthService } from './shared/auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';

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
        MatIconModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthService
    ]
})

export class AuthModule { }
