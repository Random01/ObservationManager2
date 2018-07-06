import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

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
import { UsersModule } from './users/users.module';
import { EyepieceService } from './eyepieces/shared/eyepiece.service';
import { ScopeService } from './scopes/shared/scope.service';
import { FilterService } from './filters/shared/filter.service';

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
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    UsersModule
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
    TargetModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [
    SessionService,
    EyepieceService,
    ScopeService,
    FilterService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
