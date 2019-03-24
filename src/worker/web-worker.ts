import { RequestType } from './shared/request-type.model';
import { ExporterWorker } from './exporters/exporter.worker';

onmessage = function (e) {
    console.log('Worker: Message received from main script');

    if (e.data) {
        const { requestType, payload } = e.data;
        if (requestType === RequestType.Export) {
            const worker = new ExporterWorker();
            worker.export(payload).then((result) => {
                (self as any).postMessage(result);
            });
        }
    }
};
