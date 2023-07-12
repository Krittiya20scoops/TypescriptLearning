import { UserModel } from "../models/model";
 
export const createUser = async (data: any) => UserModel.create(data);

export const getUsers = async () => UserModel.find();

export const getUserbyId = async (id: number) => UserModel.findById(id);

export const updateUserById = async (id: number, data: any, options: any) => UserModel.findByIdAndUpdate(id, data, options);

export const deleteUser = async (id: number) => UserModel.findByIdAndDelete(id)