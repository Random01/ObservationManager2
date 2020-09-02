import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../users/shared/user.service';
import { User } from '../../shared/models/user.model';
import { BaseComponent } from '../../shared/components/base-component';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
    selector: 'om-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent extends BaseComponent {

    profileForm = new FormGroup({
        userName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    constructor(
        private userService: UserService,
        private router: Router,
        appContext: AppContextService,
    ) {
        super(appContext);
    }

    onSubmit() {
        const { userName, email, password } = this.profileForm.value;

        if (userName && email && password) {
            const user = new User({
                email,
                userName,
                password,
            });

            this.startLoading();
            this.userService
                .register(user)
                .then(
                    () => {
                        this.endLoading();
                        this.goBack();
                    },
                    () => this.endLoading()
                );
        }
    }

    goBack() {
        this.router.navigate(['/login']);
    }
}
