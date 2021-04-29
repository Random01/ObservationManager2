import mongoose from 'mongoose';

import { EyepieceSchema } from './eyepiece.schema';

export const EyepieceModel = mongoose.model('eyepieces', EyepieceSchema);
