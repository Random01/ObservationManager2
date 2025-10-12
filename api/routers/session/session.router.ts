import * as core from 'express-serve-static-core';

import { BaseEntityRouter } from '../common';
import { SessionStore } from './session.store';
import { Session } from './session.interface';
import { SessionExporterFactory } from './session.exporter.service';

export class SessionRouter extends BaseEntityRouter<Session, SessionStore> {
  constructor(router: core.Router, store = new SessionStore(), exporter = new SessionExporterFactory()) {
    super(router, store, exporter);
  }
}
