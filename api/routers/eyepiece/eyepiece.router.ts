import * as core from 'express-serve-static-core';

import { RouterFactory } from '../common/router/router-factory';
import { EyepieceExporterFactory } from './eyepiece.exporter.service';
import { EyepieceStore } from './eyepiece.store';

export class EyepieceRouter {

  constructor(app: core.Express) {
    RouterFactory.create(
      app,
      new EyepieceStore(),
      '/eyepieces',
      new EyepieceExporterFactory(),
    );
  }

}
