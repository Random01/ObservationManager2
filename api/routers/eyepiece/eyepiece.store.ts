import { BaseMongooseStore } from '../common';
import { Eyepiece } from './eyepiece.interface';
import { EyepieceModel } from './eyepiece.model';

export class EyepieceStore extends BaseMongooseStore<any, Eyepiece> {

  constructor() {
    super(EyepieceModel);
  }

}
