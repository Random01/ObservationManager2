
import { Observable, of } from 'rxjs/index';
import Scope from '../../common/models/equipment/scope.model';

class ScopeService {

    scopeId: number;
    scopes: Scope[];

    constructor() {
        this.scopes = [
            new Scope({ id: '1', model: 'SW 254/1200', aperture: 254, focalLength: 1200, vendor: 'SW' }),
            new Scope({ id: '2', model: 'SW 200/1000', aperture: 200, focalLength: 1000, vendor: 'SW' })
        ];

        this.scopeId = 3;
    }

    public getAll(): Observable<Scope[]> {
        return of(this.scopes);
    }

    public add(scope: Scope): Observable<Scope> {
        const sc = new Scope(scope);

        sc.id = (this.scopeId++).toString();

        this.scopes.push(scope);
        return of(scope);
    }

    public getById(scopeId: string): Observable<Scope> {
        return of(this.scopes.find(s => s.id === scopeId));
    }

    public update(scope: Scope): Observable<Scope> {
        const scopeIndex = this.scopes.findIndex(s => s.id === scope.id);
        if (scopeIndex !== -1) {
            this.scopes.splice(scopeIndex, 1, scope);
        }
        return of(scope);
    }
}

export default new ScopeService();
