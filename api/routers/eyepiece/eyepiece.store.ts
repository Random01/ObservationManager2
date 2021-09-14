import { Connection } from 'mongoose';

import { BaseMongooseStore } from '../common';

import { Eyepiece } from './eyepiece.interface';
import { EyepieceSchema } from './eyepiece.schema';

export class EyepieceStore extends BaseMongooseStore<any, Eyepiece> {

    constructor(db: Connection) {
        super(db.model('eyepieces', EyepieceSchema));
    }

}
