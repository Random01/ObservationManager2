import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { EquipmentComponent } from './equipment/equipment.component';
import { UsersComponent } from './users/users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';

const routes: Routes = [
  {
    path: 'equipment',
    component: EquipmentComponent
  },

  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/new-user',
    component: AddUserComponent
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ]
})
export class AppRoutingModule { }
