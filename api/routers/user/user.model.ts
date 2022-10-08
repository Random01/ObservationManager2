import mongoose from 'mongoose';

import { User } from './user.interface';
import { UserSchema } from './user.schema';

export const UserModel = mongoose.model<User>('users', UserSchema);
