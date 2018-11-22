import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from '../shared/authentication.service';
import { BaseComponent } from '../../shared/components/base-component';

@Component({
    selector: 'om-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [
        AuthenticationService
    ]
})
export class LoginComponent extends BaseComponent {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService) {
        super();

        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const { email, password } = this.form.value;

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
