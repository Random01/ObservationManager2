import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

export class Message {
  text: string;
}

@Injectable({ providedIn: 'root' })
export class MessageService {

  constructor(
    private readonly snackBar: MatSnackBar,
  ) { }

  public info(message: string) {
    this.snackBar.open(message, 'X', {
      duration: 3000,
    });
  }

  public error(errorMessage: string) {
    this.snackBar.open(errorMessage, 'X', {
      panelClass: ['error'],
    });
  }

}
