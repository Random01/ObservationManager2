import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthenticationService } from '../shared';
import { BaseComponent } from '../../shared/components';

@Component({
    selector: 'om-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent extends BaseComponent {

    public loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
    ) {
        super();
    }

    public onSubmit() {
        const { email, password } = this.loginForm.value;

        if (email && password) {
            this.startLoading();
            this.authenticationService.signIn(email, password).then(() => {
                this.endLoading();
                this.router.navigate(['/']);
            }, () => this.endLoading());
        }
    }

}
