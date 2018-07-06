import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../shared/models/user.model';

import { StorageService } from '../../shared/services/storage.service';

@Injectable()
export class UserService extends StorageService<User> {

    constructor(protected http: HttpClient) {
        super(http, '/users');
    }

    deserialize(state: any): User {
        return new User(state);
    }

    createNew(): User {
        return new User();
    }

}
