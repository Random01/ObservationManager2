import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../auth/shared/authentication.service';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'om-user-profile-menu',
    templateUrl: './user-profile-menu.component.html',
    styleUrls: ['./user-profile-menu.component.css']
})
export class UserProfileMenuComponent implements OnInit {

    public isAuthenticated: boolean;
    public currentUser: User;

    ngOnInit(): void {
        this.authenticationService
            .isAuthenticated
            .pipe()
            .subscribe((isAuthenticated) => {
                this.isAuthenticated = isAuthenticated;
            });

        this.authenticationService
            .currentUser
            .pipe()
            .subscribe((user) => {
                this.currentUser = user;
            });
    }

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) {
    }

    signOut() {
        this.authenticationService.signOut();
    }

    editProfile() {
        this.router.navigate(['/users/profile']);
    }

}
