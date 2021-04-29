import { ScopeTxtExporter } from './scope.txt-exporter.service';

export class ScopeExporterFactory {

    public getExporter() {
        return new ScopeTxtExporter();
    }

}
