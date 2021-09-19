import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScopesComponent } from './scopes/scopes.component';
import { AddScopeComponent } from './add-scope/add-scope.component';
import { EditScopeComponent } from './edit-scope/edit-scope.component';
import { AuthGuardService } from '../auth/shared/auth-guard.service';

const scopesRoutes: Routes = [
  {
    path: 'scopes',
    component: ScopesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'scopes/new-scope',
    component: AddScopeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'scopes/:id',
    component: EditScopeComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(scopesRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ScopesRoutingModule { }
