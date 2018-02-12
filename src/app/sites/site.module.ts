import { NgModule } from '@angular/core';

import { SitesComponent } from './sites.component';
import { SiteComponent } from './site/site.component';

@NgModule({
    declarations: [
        SitesComponent,
        SiteComponent
    ],
    exports: [
        SitesComponent,
        SiteComponent
    ],
    bootstrap: [
        SitesComponent,
        SiteComponent
    ]
})

export class SiteModule { }