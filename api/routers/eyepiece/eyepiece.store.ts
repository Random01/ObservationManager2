import { BaseMongooseStore } from '../common';
import { Eyepiece } from './eyepiece.interface';
import { EyepieceModel } from './eyepiece.model';

export class EyepieceStore extends BaseMongooseStore<typeof EyepieceModel, Eyepiece> {
  constructor() {
    super(EyepieceModel);
  }
}
