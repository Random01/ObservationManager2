import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../users/shared/user.service';

@Component({
    selector: 'om-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ],
    providers: [
        UserService
    ]
})
export class LoginComponent {

    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router) {

        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const val = this.form.value;

        if (val.email && val.password) {
            this.userService.authenticate(val.email, val.password).then((response) => {
                localStorage.setItem('jwtToken', response.token);

                this.router.navigate(['/']);
            });
        }
    }

}
