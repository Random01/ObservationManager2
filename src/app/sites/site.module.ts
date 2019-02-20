import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';

import { SitesComponent } from './sites/sites.component';
import { SiteComponent } from './site/site.component';
import { EditSiteComponent } from './edit-site/edit-site.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { SitesRoutingModule } from './sites-routing.module';
import { SiteService } from './shared/site.service';
import { SharedModule } from '../shared/shared.module';
import { SiteSelectorComponent } from './site-selector';
import { AddSiteDialogService, AddSiteDialogComponent } from './add-site-dialog';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        SitesRoutingModule,
        SharedModule,
        MaterialModule
    ],
    declarations: [
        SitesComponent,
        SiteComponent,
        EditSiteComponent,
        AddSiteComponent,
        AddSiteDialogComponent
    ],
    exports: [
        SiteSelectorComponent
    ],
    providers: [
        SiteService,
        AddSiteDialogService
    ],
    entryComponents: [
        AddSiteDialogComponent
    ]
})

export class SiteModule { }
