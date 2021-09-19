import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../shared/models/user.model';
import { UserService } from '../shared/user.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
    selector: 'om-users',
    templateUrl: './users.component.html',
})
export class UsersComponent extends EntityListComponent<User> {

    public readonly displayedColumns = [
        'name',
        'actions',
    ];

    constructor(
        userService: UserService,
        deleteEntityDialogService: DeleteEntityDialogService,
        route: ActivatedRoute,
        router: Router,
        appContext: AppContextService,
    ) {
        super(userService, deleteEntityDialogService, route, router, appContext);
    }

}
