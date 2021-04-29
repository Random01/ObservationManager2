import { SessionTxtExporter } from './session.txt-exporter.service';

export class SessionExporterFactory {

    public getExporter() {
        return new SessionTxtExporter();
    }

}
