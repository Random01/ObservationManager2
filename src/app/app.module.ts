import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ScopesModule } from './scopes/scopes.module';
import { SessionsModule } from './sessions/sessions.module';
import { TargetModule } from './target/target.module';
import { ObservationsModule } from './observations/observations.module';
import { EquipmentModule } from './equipment/equipment.module';
import { SiteModule } from './sites/site.module';
import { EyepieceModule } from './eyepieces/eyepiece.module';
import { FilterModule } from './filters/filters.module';
import { UsersModule } from './users/users.module';
import { LensesModule } from './lenses/lenses.module';
import { AuthModule } from './auth/auth.module';
import { UserProfileMenuComponent } from './main/userProfileMenu/user-profile-menu.component';
import { ObservingProgramsModule } from './observing-programs/observing-programs.module';

import { reducers, metaReducers } from './store';
import { AuthEffects } from './store/auth';
import { RegisterEffects } from './store/register';

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
    MatMenuModule,
    ObservingProgramsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([
      AuthEffects,
      RegisterEffects,
    ]),
  ],
  declarations: [
    AppComponent,
    UserProfileMenuComponent,
  ],
  exports: [
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatTableModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
