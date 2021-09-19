import { ExporterFactory, ExportType } from './../common/export';
import { Session } from './session.interface';
import { SessionTxtExporter } from './session.txt-exporter.service';

export class SessionExporterFactory extends ExporterFactory<Session> {

  constructor() {
    super([
      [ExportType.CSV, SessionTxtExporter],
    ]);
  }

}
