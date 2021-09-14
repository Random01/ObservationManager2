import { ExportType } from './export-type.enum';
import { Exporter } from './exporter.interface';

export interface ExporterFactory<T = any> {
    getExporter(exporterType: ExportType): Exporter<T>;
}
