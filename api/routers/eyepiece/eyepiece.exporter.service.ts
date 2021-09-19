import { ExporterFactory, ExportType } from './../common/export';
import { EyepieceCsvExporter } from './eyepiece.csv-exporter.service';
import { Eyepiece } from './eyepiece.interface';

export class EyepieceExporterFactory extends ExporterFactory<Eyepiece> {

  constructor() {
    super([
      [ExportType.CSV, EyepieceCsvExporter],
    ]);
  }

}
