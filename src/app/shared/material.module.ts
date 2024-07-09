import { NgModule } from '@angular/core';

import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig } from '@angular/material/dialog';

export const matTooltipDefaultOptions: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};

export const matDialogConfig: MatDialogConfig = {
  hasBackdrop: true,
};

@NgModule({
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: matTooltipDefaultOptions },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: matDialogConfig },
  ],
})
export class MaterialModule { }
