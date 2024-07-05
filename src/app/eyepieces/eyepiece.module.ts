import { NgModule } from '@angular/core';

import { EyepiecesRoutingModule } from './eyepieces-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    EyepiecesRoutingModule,
    SharedModule,
  ],
})
export class EyepieceModule { }
