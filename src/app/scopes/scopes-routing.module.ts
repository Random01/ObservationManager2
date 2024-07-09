import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScopesComponent } from './scopes/scopes.component';
import { AddScopeComponent } from './add-scope/add-scope.component';
import { EditScopeComponent } from './edit-scope/edit-scope.component';
import { AuthGuard } from '../auth/shared/auth.guard';

const scopesRoutes: Routes = [
  {
    path: '',
    component: ScopesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new-scope',
    component: AddScopeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: EditScopeComponent,
    canActivate: [AuthGuard],
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
