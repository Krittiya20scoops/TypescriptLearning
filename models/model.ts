import mongoose, { Schema } from 'mongoose';

export interface IData {
    name: string;
    age: number;
} 

const dataSchema: Schema = new Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
});
const Data = mongoose.model<IData>('Data',dataSchema);

export {Data}
