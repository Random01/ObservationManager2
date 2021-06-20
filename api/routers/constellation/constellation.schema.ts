import { Schema } from 'mongoose';

export const ConstellationSchema = new Schema({
    code: String,
    name: String,
});
