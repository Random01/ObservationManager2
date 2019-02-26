import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggingService {

    logError(error: Error) {
        console.error(error.message);
    }

}
