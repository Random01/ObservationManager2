import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        AuthService
    ]
})

export class AuthModule { }
