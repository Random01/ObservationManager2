import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatInputModule } from '@angular/material';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from './shared/user.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        UsersRoutingModule
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
