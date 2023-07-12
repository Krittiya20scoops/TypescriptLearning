import mongoose, { Schema } from 'mongoose';

export type User = {
    name: string;
    age: number;
} 

const userSchema: Schema = new Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
});
export const UserModel = mongoose.model<User>('Data',userSchema);

