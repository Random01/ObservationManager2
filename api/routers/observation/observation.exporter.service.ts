import { Observation } from './observation.interface';
import { ObservationTxtExporter } from './observation.txt-exporter.service';

import { ExporterFactory, ExportType } from '../common/export';

export class ObservationExporterService extends ExporterFactory<Observation> {

  constructor() {
    super([
      [ExportType.TXT, ObservationTxtExporter],
    ]);
  }

}
