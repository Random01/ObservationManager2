import { FilterCsvExporter } from './filter.csv-exporter.service';

export class FilterCsvExporterFactory {

    public getExporter() {
        return new FilterCsvExporter();
    }

}
