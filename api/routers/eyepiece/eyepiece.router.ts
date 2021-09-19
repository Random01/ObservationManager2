import * as core from 'express-serve-static-core';

import { Connection } from 'mongoose';

import { RouterFactory } from '../common/router/router-factory';

import { EyepieceExporterFactory } from './eyepiece.exporter.service';
import { EyepieceStore } from './eyepiece.store';

export class EyepieceRouter {

  constructor(app: core.Express, db: Connection) {
    RouterFactory.create(
      app,
      new EyepieceStore(db),
      '/eyepieces',
      new EyepieceExporterFactory(),
    );
  }

}
