import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { SessionsComponent } from './sessions/sessions.component';

import { AppRoutingModule } from './app-routing.module';
import { ScopesModule } from './scopes/scopes.module';
import { SessionsModule } from './sessions/sessions.module';
import { SessionService } from './sessions/shared/session.service';

import { MatButtonModule, MatNativeDateModule, MatInputModule, MatDatepickerModule } from '@angular/material';
import { TargetModule } from './target/target.module';
import { ObservationModule } from './observations/observation.module';
import { EquipmentComponent } from './equipment/equipment.component';
import { SiteModule } from './sites/site.module';
import { EyepieceModule } from './eyepieces/eyepiece.module';
import { FilterModule } from './filters/filter.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ScopesModule,
    SessionsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    TargetModule,
    ObservationModule,
    SiteModule,
    EyepieceModule,
    FilterModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    EquipmentComponent
  ],
  exports: [
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    TargetModule
  ],
  providers: [
    SessionService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
