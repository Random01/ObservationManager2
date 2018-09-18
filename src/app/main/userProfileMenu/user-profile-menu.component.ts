import { Component } from '@angular/core';

import { AuthenticationService } from '../../auth/shared/authentication.service';

@Component({
    selector: 'om-user-profile-menu',
    templateUrl: './user-profile-menu.component.html',
    styleUrls: ['./user-profile-menu.component.css'],
    providers: [
        AuthenticationService
    ]
})
export class UserProfileMenuComponent {

    constructor(private authenticationService: AuthenticationService) {

    }

    signOut() {
        this.authenticationService.signOut();
    }

    editProfile() {

    }

}
