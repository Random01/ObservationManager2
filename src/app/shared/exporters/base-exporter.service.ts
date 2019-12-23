import { WebWorkerIntegration } from '../services/web-worker-integration.service';

export class BaseExporterService {

    constructor(protected worker: WebWorkerIntegration) { }

}
