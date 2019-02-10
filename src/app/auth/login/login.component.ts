import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthenticationService } from '../shared';
import { BaseComponent } from '../../shared/components';

@Component({
    selector: 'om-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent {

    loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) {
        super();
    }

    onSubmit() {
        const { email, password } = this.loginForm.value;

        if (email && password) {
            this.startLoading();
            this.authenticationService.signIn(email, password).then(() => {
                this.endLoading();
                this.router.navigate(['/']);
            }, () => {
                this.endLoading();
            });
        }
    }

}
