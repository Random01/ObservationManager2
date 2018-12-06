import { Component } from '@angular/core';

import { User } from '../../shared/models/user.model';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'om-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: [ './user-profile.component.css' ],
    providers: [UserService]
})

export class UserProfileComponent {

    user: User;

    constructor(
        private router: Router,
        private userService: UserService) {
    }

}
