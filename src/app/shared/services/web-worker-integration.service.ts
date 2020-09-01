import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WebWorkerIntegration {

    public run(url: string, data: any): Promise<any> {
        return new Promise((success, fail) => {
            if ((<any>window).Worker) {
                const worker = new Worker(url);
                worker.onmessage = (result) => {
                    success('Message received from worker: ' + result.data);
                };

                worker.postMessage(data);
            } else {
                fail(new Error('Worker not found.'));
            }
        });
    }
}
