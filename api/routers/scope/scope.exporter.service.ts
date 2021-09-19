import { Scope } from './scope.interface';
import { ScopeCsvExporter } from './scope.csv-exporter.service';
import { ExporterFactory, ExportType } from './../common/export';

export class ScopeExporterFactory extends ExporterFactory<Scope> {

  constructor() {
    super([
      [ExportType.CSV, ScopeCsvExporter],
    ]);
  }

}
