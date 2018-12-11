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

import { AppRoutingModule } from './app-routing.module';
import { ScopesModule } from './scopes/scopes.module';
import { SessionsModule } from './sessions/sessions.module';
import { SessionService } from './sessions/shared/session.service';

import { MatButtonModule, MatNativeDateModule, MatInputModule, MatDatepickerModule } from '@angular/material';
import { TargetModule } from './target/target.module';
import { ObservationsModule } from './observations/observations.module';
import { EquipmentModule } from './equipment/equipment.module';
import { SiteModule } from './sites/site.module';
import { EyepieceModule } from './eyepieces/eyepiece.module';
import { FilterModule } from './filters/filters.module';
import { UsersModule } from './users/users.module';
import { EyepieceService } from './eyepieces/shared/eyepiece.service';
import { ScopeService } from './scopes/shared/scope.service';
import { FilterService } from './filters/shared/filter.service';
import { LensesModule } from './lenses/lenses.module';
import { LensService } from './lenses/shared/lens.service';
import { AuthModule } from './auth/auth.module';

import { UserProfileMenuComponent } from './main/userProfileMenu/user-profile-menu.component';
import { AuthenticationService } from './auth/shared/authentication.service';
import { MessageService } from './shared/services/message.service';

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
    ObservationsModule,
    SiteModule,
    EyepieceModule,
    FilterModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    UsersModule,
    LensesModule,
    EquipmentModule,
    AuthModule,
    MatIconModule,
    MatMenuModule
  ],
  declarations: [
    AppComponent,
    UserProfileMenuComponent
  ],
  exports: [
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [
    SessionService,
    EyepieceService,
    ScopeService,
    FilterService,
    LensService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
