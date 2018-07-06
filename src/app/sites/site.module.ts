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

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatIconModule
    ],
    declarations: [
        SitesComponent,
        SiteComponent,
        EditSiteComponent,
        AddSiteComponent
    ]
})

export class SiteModule { }
