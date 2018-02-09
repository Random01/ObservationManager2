import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { SessionsComponent } from './sessions/sessions.component';

import { AppRoutingModule } from './app-routing.module';
import { ScopesModule } from './scopes/scopes.module';
import { SessionsModule } from './sessions/sessions.module';
import { SessionService } from './sessions/shared/session.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ScopesModule,
    SessionsModule
  ],
  declarations: [ AppComponent ],
  providers: [
    SessionService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
