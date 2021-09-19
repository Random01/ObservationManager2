import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { User } from '../../shared/models/user.model';
import { UserService } from '../shared/user.service';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
    selector: 'om-add-user',
    templateUrl: './add-user.component.html',
})
export class AddUserComponent extends AddEntityComponent<User> {

    constructor(
        private readonly router: Router,
        service: UserService,
        appContext: AppContextService,
    ) {
        super(service, appContext);
    }

    public goBack() {
        this.router.navigate(['/users']);
    }
}
