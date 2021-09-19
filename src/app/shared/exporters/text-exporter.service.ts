import { Injectable } from '@angular/core';

import { BaseExporterService } from './base-exporter.service';

@Injectable({ providedIn: 'root' })
export class TextExporter extends BaseExporterService {

    public export(data: any): Promise<any> {
        throw new Error('Method not implemented.');
    }

}
