import { Component } from '@angular/core';

import { User } from '../../shared/models/user.model';
import { UserService } from '../shared/user.service';

import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'om-users',
    templateUrl: './users.component.html'
})
export class UsersComponent extends EntityListComponent<User> {

    displayedColumns = [
        'name',
        'actions'
    ];

    constructor(
        userService: UserService,
        deleteEntityDialogService: DeleteEntityDialogService,
        route: ActivatedRoute,
        router: Router) {
        super(userService, deleteEntityDialogService, route, router);
    }

}
