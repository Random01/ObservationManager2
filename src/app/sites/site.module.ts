import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatInputModule } from '@angular/material';

import { SitesComponent } from './sites.component';
import { SiteComponent } from './site/site.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        MatButtonModule,
        MatInputModule
    ],
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
