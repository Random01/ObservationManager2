import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { User } from '../../shared/models/user.model';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'om-add-user',
    templateUrl: './add-user.component.html'
})

export class AddUserComponent extends AddEntityComponent<User> {
    constructor(
        private router: Router,
        private userService: UserService) {
        super(userService);
    }

    goBack() {
        this.router.navigate(['/users']);
    }
}
