import { LensCsvExporter } from './lens.csv-exporter.service';

export class LensExporterFactory {

    public getExporter() {
        return new LensCsvExporter();
    }

}
