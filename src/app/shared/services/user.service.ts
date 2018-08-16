import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { StorageService } from './storage.service';

@Injectable()
export class UserService extends StorageService<User> {
    constructor(protected http: HttpClient) {
        super(http, '/users');
    }

    createNew(params?: any): User {
        return new User(params);
    }
}
