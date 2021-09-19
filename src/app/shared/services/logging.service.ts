import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {

  public error(error: Error): void {
    console.error(error.message);
  }

}
