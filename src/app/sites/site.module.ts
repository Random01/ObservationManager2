import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import {
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule
} from '@angular/material';

import { SitesComponent } from './sites.component';
import { SiteComponent } from './site/site.component';
import { EditSiteComponent } from './edit-site/edit-site.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { SitesRoutingModule } from './sites-routing.module';
import { SiteService } from './shared/site.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        SitesRoutingModule
    ],
    declarations: [
        SitesComponent,
        SiteComponent,
        EditSiteComponent,
        AddSiteComponent
    ],
    providers: [
        SiteService
    ]
})

export class SiteModule { }
