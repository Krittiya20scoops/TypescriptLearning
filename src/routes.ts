import express from 'express';
import { createUser, deleteUser, getListUsers, getUserbyId, updateUser } from './controller/user.controller';
const router = express.Router()

//Post Method
router.post('/post', createUser)

//Get all Method
router.get('/getAll', getListUsers)

//Get by ID Method
router.get('/getOne/:id', getUserbyId)

//Update by ID Method
router.patch('/update/:id', updateUser)

//Delete by ID Method
router.delete('/delete/:id', deleteUser)

export default router;

