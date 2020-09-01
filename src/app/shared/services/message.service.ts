import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

export class Message {
    text: string;
}

@Injectable({ providedIn: 'root' })
export class MessageService {

    constructor(
        private readonly snackBar: MatSnackBar
    ) {
    }

    public showInfo(message: string) {
        this.snackBar.open(message, 'Undo', {
            duration: 1000,
        });
    }

    public showError(errorMessage: string) {
        this.snackBar.open(errorMessage, 'X', {
            panelClass: ['error'],
        });
    }

}
