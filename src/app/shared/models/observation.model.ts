import { Entity } from './entity.model'
import { Scope } from './scope.model'
import { Result } from './result.model'

export class Observation extends Entity {
    public observer: string;
    public size: string;
    public session: string;
    public target: string;
    public begin: string;
    public seeing: string;
    public scope: Scope;
    public result: Result;
}