import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SitesComponent } from './sites/sites.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { EditSiteComponent } from './edit-site/edit-site.component';
import { AuthGuardService } from '../auth/shared/auth-guard.service';

const sitesRoutes: Routes = [
    {
        path: 'sites',
        component: SitesComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'sites/new-site',
        component: AddSiteComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'sites/:id',
        component: EditSiteComponent,
        canActivate: [AuthGuardService],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(sitesRoutes),
    ],
    exports: [
        RouterModule,
    ]
})
export class SitesRoutingModule { }
