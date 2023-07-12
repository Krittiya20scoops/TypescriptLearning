import { User } from "../models/model";
import * as userDao from "../dao/user.dao";
export type CreateUserDto = {
    body: User
};

export type UpdateUserDto = {
    params: any,
    body: User
};

export const create = async (req: CreateUserDto, res: any) => {
    try {
        const dataToSave = await userDao.createUser({
            name: req.body.name,
            age: req.body.age
        });
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const list = async (req: any, res: any) => {
    try {
        const datas = await userDao.getUsers();
        res.json(datas);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getInfoById = async (req: any, res: any) => {
    try{
        const data = await userDao.getUserbyId(req.params.id)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

export const updateUser = async (req: UpdateUserDto, res: any) => {
    try {

        console.log(req.params.id, req.body,);
        const result = await userDao.updateUserById(
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
        const data = await userDao.deleteUser(req.params.id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}