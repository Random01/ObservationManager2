import { ExportType } from './export-type.model';

export interface ExportPayload {
    type: ExportType;
    data: any;
}
