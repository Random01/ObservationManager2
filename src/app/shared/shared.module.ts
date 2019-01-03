import { NgModule } from '@angular/core';

import { MessageService } from './services/message.service';
import { DegreesInputComponent } from './components/degrees-input/degrees-input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DegreesFormatter } from './models/pipes/degrees-formatter.pipe';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [
        DegreesInputComponent,
        DegreesFormatter
    ],
    exports: [
        DegreesInputComponent,
        DegreesFormatter
    ],
    providers: [
        MessageService
    ]
})

export class SharedModule { }
