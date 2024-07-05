import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

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
import { EquipmentModule } from './equipment/equipment.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { reducers, metaReducers } from './store';
import { AuthEffects } from './store/auth';
import { RegisterEffects } from './store/register';
import { UserProfileMenuComponent } from './main/user-profile-menu';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
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
  providers: [
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideNoopAnimations(),
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    UsersModule,
    EquipmentModule,
    AuthModule,
    MatIconModule,
    MatMenuModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([
      AuthEffects,
      RegisterEffects,
    ]),

    UserProfileMenuComponent,
  ],
})
export class AppModule { }
