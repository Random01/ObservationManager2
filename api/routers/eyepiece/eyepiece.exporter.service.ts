import { EyepieceCsvExporter } from './eyepiece.csv-exporter.service';

export class EyepieceExporterFactory {

    public getExporter() {
        return new EyepieceCsvExporter();
    }

}
