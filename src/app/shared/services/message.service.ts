import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';

export class Message {
    text: string;
}

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    constructor(
        private snackBar: MatSnackBar
    ) {
    }

    showInfo(message: string) {
        this.snackBar.open(message, 'Undo', {
            duration: 1000
        });
    }

    showError(errorMessage: string) {
        this.snackBar.open(errorMessage, 'X', {
            panelClass: ['error']
        });
    }

}
