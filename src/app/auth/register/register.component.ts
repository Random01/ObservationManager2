import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../users/shared/user.service';
import { User } from '../../shared/models/user.model';

@Component({
    selector: 'om-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [
        UserService
    ]
})
export class RegisterComponent {

    profileForm = new FormGroup({
        userName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor(
        private userService: UserService,
        private router: Router
    ) {
    }

    onSubmit() {
        const { userName, email, password } = this.profileForm.value;

        if (userName && email && password) {
            const user = new User({
                email,
                userName,
                password
            });
            this.userService.register(user).then(() => this.goBack());
        }

    }

    goBack() {
        this.router.navigate(['/']);
    }
}
