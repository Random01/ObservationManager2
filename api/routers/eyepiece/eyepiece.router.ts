import * as core from 'express-serve-static-core';

import { BaseEntityRouter } from '../common/router';
import { EyepieceExporterFactory } from './eyepiece.exporter.service';
import { EyepieceStore } from './eyepiece.store';
import { Eyepiece } from './eyepiece.interface';

export class EyepieceRouter extends BaseEntityRouter<Eyepiece, EyepieceStore> {
  constructor(router: core.Router, store = new EyepieceStore(), exporter = new EyepieceExporterFactory()) {
    super(router, store, exporter);
  }
}
