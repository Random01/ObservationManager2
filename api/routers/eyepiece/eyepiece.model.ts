import mongoose from 'mongoose';

import { Eyepiece } from './eyepiece.interface';
import { EyepieceSchema } from './eyepiece.schema';

export const EyepieceModel = mongoose.model<Eyepiece>('eyepieces', EyepieceSchema);
