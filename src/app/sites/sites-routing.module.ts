import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SitesComponent } from './sites/sites.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { EditSiteComponent } from './edit-site/edit-site.component';

const sitesRoutes: Routes = [
    {
        path: 'sites',
        component: SitesComponent
      },
      {
        path: 'sites/new-site',
        component: AddSiteComponent
      },
      {
        path: 'sites/:id',
        component: EditSiteComponent
      },
];

@NgModule({
    imports: [
        RouterModule.forChild(sitesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SitesRoutingModule { }
