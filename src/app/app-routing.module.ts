import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { EquipmentComponent } from './equipment/equipment.component';

const routes: Routes = [
  {
    path: 'equipment',
    component: EquipmentComponent,
  },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: environment.production,
        relativeLinkResolution: 'legacy',
      },
    )
  ],
})
export class AppRoutingModule { }
