import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../auth/shared/authentication.service';

@Component({
    selector: 'om-user-profile-menu',
    templateUrl: './user-profile-menu.component.html',
    styleUrls: ['./user-profile-menu.component.css']
})
export class UserProfileMenuComponent implements OnInit {

    public isAuthenticated: boolean;

    ngOnInit(): void {
        this.authenticationService
            .isAuthenticated
            .pipe()
            .subscribe((isAuthenticated) => {
                this.isAuthenticated = isAuthenticated;
            });
    }

    constructor(
        private authenticationService: AuthenticationService) {
    }

    signOut() {
        this.authenticationService.signOut();
    }

    editProfile() {

    }

}
