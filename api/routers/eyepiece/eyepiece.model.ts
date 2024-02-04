import { model } from 'mongoose';

import { EyepieceSchema } from './eyepiece.schema';

export const EyepieceModel = model('eyepieces', EyepieceSchema);
