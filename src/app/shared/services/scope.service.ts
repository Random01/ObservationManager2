import { Injectable } from '@angular/core';
import { Scope } from './../models/scope.model';

@Injectable()
export class ScopeService {

    getScopes(): Promise<Scope[]> {

        return Promise.resolve([
            new Scope({
                id: '1',
                model: 'SW254/1200',
                aperture: 254,
                focalLength: 1200}),
            new Scope({
                id: '2',
                model: 'DS90/500',
                aperture: 90,
                focalLength: 500
            })
        ]);
        
    }
}