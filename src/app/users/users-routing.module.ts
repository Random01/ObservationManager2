import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuardService } from '../auth/shared/auth-guard.service';

const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: 'users/new-user',
        component: AddUserComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'users/profile',
        component: UserProfileComponent,
        canActivate: [AuthGuardService],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class UsersRoutingModule { }
