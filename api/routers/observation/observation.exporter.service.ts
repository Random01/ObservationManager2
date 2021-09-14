import { Observation } from './observation.interface';
import { ObservationTxtExporter } from './observation.txt-exporter.service';

import { Exporter, ExporterFactory, ExportType } from '../common/export';

export class ObservationExporterService implements ExporterFactory {

    public getExporter(_: ExportType): Exporter<Observation> {
        return new ObservationTxtExporter();
    }

}






