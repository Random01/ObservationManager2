import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../users/shared/user.service';

@Component({
    selector: 'om-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [
        UserService
    ]
})
export class LoginComponent {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router) {

        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const { email, password } = this.form.value;

        if (email && password) {
            this.userService.authenticate(email, password).then((response) => {
                localStorage.setItem('jwtToken', response.token);
                this.router.navigate(['/']);
            });
        }
    }

}
