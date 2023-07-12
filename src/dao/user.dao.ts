import { UserModel } from "../models/model";
 
export const create = async (data: any) => UserModel.create(data);

export const getAll = async () => UserModel.find();

export const getOne = async (id: number) => UserModel.findById(id);

export const update = async (id: number, data: any, options: any) => UserModel.findByIdAndUpdate(id, data, options);

export const deleteOne = async (id: number) => UserModel.findByIdAndDelete(id)