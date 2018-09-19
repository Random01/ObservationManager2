import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UserService } from '../../users/shared/user.service';
import { User } from '../../shared/models/user.model';
import { BaseEntityComponent } from '../../shared/components/base-entity.component';

@Component({
    selector: 'om-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [
        UserService
    ]
})
export class RegisterComponent extends BaseEntityComponent<User> implements OnInit {

    item: User;

    constructor(
        private userService: UserService,
        private router: Router
    ) {
        super();
    }

    register() {
        this.userService.register(this.item).then(() => {
            this.router.navigate(['/']);
        });
    }

    ngOnInit(): void {
        this.item = this.userService.createNew();
    }
}
