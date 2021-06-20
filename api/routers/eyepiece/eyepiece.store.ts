import { Connection } from 'mongoose';

import { BaseMongooseStore } from '../common';

import { EyepieceSchema } from './eyepiece.schema';

export class EyepieceStore extends BaseMongooseStore<any, any> {

    constructor(db: Connection) {
        super(db.model('eyepieces', EyepieceSchema));
    }

}
