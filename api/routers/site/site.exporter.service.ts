import { SiteCvsExporter } from './site.csv-exporter.service';
import { Site } from './site.interface';
import { ExporterFactory, ExportType } from './../common/export';

export class SiteExporterFactory extends ExporterFactory<Site> {

  constructor() {
    super([
      [ExportType.CSV, SiteCvsExporter],
    ]);
  }

}
