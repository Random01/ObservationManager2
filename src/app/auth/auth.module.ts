import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { UsersModule } from '../users/users.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        UsersModule,
        MaterialModule,
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
    ],
})
export class AuthModule { }
