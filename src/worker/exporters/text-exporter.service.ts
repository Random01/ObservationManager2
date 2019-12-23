import { BaseExporterService } from './base-exporter.service';

export class TextExporterService extends BaseExporterService {

    public export(data: any): Promise<any> {
        return new Promise((success) => {
            success('Text');
        });
    }

}
