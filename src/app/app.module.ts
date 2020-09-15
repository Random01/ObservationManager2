import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ScopesModule } from './scopes/scopes.module';
import { SessionsModule } from './sessions/sessions.module';

import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
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
        ObservingProgramsModule
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
    bootstrap: [AppComponent]
})

export class AppModule { }
