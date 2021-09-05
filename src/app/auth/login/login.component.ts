import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthenticationService } from '../shared';
import { BaseComponent } from '../../shared/components';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
    selector: 'om-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent extends BaseComponent {

    public readonly loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor(
        private readonly router: Router,
        private readonly authenticationService: AuthenticationService,
        appContext: AppContextService,
    ) {
        super(appContext);
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
