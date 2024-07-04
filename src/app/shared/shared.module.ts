import { NgModule } from '@angular/core';
import { DecimalPipe, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { DeleteEntityDialogComponent } from './components/delete-entity-dialog/delete-entity-dialog.component';
import { DegreesFormatter } from './models/pipes/degrees-formatter.pipe';
import { EyepieceFocalLengthPipe } from './models/pipes/eyepiece-focal-length-formatter.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    DegreesFormatter,
    EyepieceFocalLengthPipe,
    DeleteEntityDialogComponent,
  ],
  exports: [
    DegreesFormatter,
    EyepieceFocalLengthPipe,
  ],
  providers: [
    DecimalPipe,
  ],
})
export class SharedModule { }
