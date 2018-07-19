import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScopesComponent } from './scopes/scopes.component';
import { AddScopeComponent } from './add-scope/add-scope.component';
import { EditScopeComponent } from './edit-scope/edit-scope.component';

const scopesRoutes: Routes = [
    {
        path: 'scopes',
        component: ScopesComponent
    },
    {
        path: 'scopes/new-scope',
        component: AddScopeComponent
    },
    {
        path: 'scopes/:id',
        component: EditScopeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(scopesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ScopesRoutingModule { }
