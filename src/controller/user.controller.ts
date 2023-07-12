import { User } from "../models/model";
import { create, deleteOne, getAll, getOne, update } from "../dao/user.dao";
export type CreateUserDto = {
    body: User
};

export type UpdateUserDto = {
    params: any,
    body: User
};

export const createUser = async (req: CreateUserDto, res: any) => {
    try {
        const dataToSave = await create({
            name: req.body.name,
            age: req.body.age
        });
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getListUsers = async (req: any, res: any) => {
    try {
        const datas = await getAll();
        res.json(datas);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUserbyId = async (req: any, res: any) => {
    try{
        const data = await getOne(req.params.id)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

export const updateUser = async (req: UpdateUserDto, res: any) => {
    try {

        console.log(req.params.id, req.body,);
        const result = await update(
            req.params.id, req.body, { new: true }
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteUser = async (req: any, res: any) => {
    try {
        const data = await deleteOne(req.params.id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}