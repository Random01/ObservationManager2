import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';

export class Message {
    text: string;
}

@Injectable()
export class MessageService {

    constructor(
        private snackBar: MatSnackBar
    ) {
    }

    show(message: Message) {
        this.snackBar.open(message.text, 'Undo', {
            duration: 1000
        });
    }

}
