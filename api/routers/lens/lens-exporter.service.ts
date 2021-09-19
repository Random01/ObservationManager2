
import { ExporterFactory, ExportType } from './../common/export';
import { LensCsvExporter } from './lens.csv-exporter.service';
import { Lens } from './lens.interface';

export class LensExporterFactory extends ExporterFactory<Lens> {

  constructor() {
    super([
      [ExportType.CSV, LensCsvExporter],
    ]);
  }

}
