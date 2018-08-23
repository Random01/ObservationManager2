import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatInputModule } from '@angular/material';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        MatButtonModule,
        MatInputModule
    ],
    declarations: [
        UserComponent,
        UsersComponent,
        AddUserComponent
    ],
    exports: [
        UserComponent,
        UsersComponent,
        AddUserComponent
    ],
    bootstrap: [
        UserComponent,
        UsersComponent,
        AddUserComponent
    ]
})

export class UsersModule { }