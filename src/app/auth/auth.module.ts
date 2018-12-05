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
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { UsersModule } from '../users/users.module';
import { JwtService } from './shared/jwt.service';

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
        JwtService
    ]
})

export class AuthModule { }
