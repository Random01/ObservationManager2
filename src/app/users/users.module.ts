import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from './shared/user.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        UsersRoutingModule,
        MaterialModule
    ],
    declarations: [
        UserComponent,
        UsersComponent,
        AddUserComponent,
        UserProfileComponent
    ],
    providers: [
        UserService
    ]
})

export class UsersModule { }
