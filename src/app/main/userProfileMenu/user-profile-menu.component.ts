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
    public isWorking: boolean;

    ngOnInit(): void {
        this.isWorking = true;

        this.authenticationService
            .isAuthenticated
            .pipe()
            .subscribe((isAuthenticated) => {
                this.isAuthenticated = isAuthenticated;
                this.isWorking = false;
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
        this.authenticationService.signOut().then(() => {
            this.router.navigate(['/']);
        });
    }

    editProfile() {
        this.router.navigate(['/users/profile']);
    }

}
