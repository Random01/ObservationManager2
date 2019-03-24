import { TextExporterService } from '.';
import { ExportPayload } from './export-payload.interface';

export class ExporterWorker {

    constructor() {
    }

    export(payload: ExportPayload): Promise<any> {
        const service = new TextExporterService();
        return service.export(payload.data);
    }

}
