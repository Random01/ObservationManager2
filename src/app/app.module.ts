import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { reducers, metaReducers } from './store';
import { AuthEffects } from './store/auth';
import { RegisterEffects } from './store/register';
import { UserProfileMenuComponent } from './main/user-profile-menu';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [provideHttpClient(withInterceptorsFromDi(), withFetch()), provideNoopAnimations()],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([AuthEffects, RegisterEffects]),

    UserProfileMenuComponent,
  ],
})
export class AppModule {}
