import { ExporterFactory, ExportType } from './../common/export';
import { FilterCsvExporter } from './filter.csv-exporter.service';
import { Filter } from './filter.interface';

export class FilterExporterFactory extends ExporterFactory<Filter> {

  constructor() {
    super([
      [ExportType.CSV, FilterCsvExporter],
    ]);
  }

}
