import express from 'express';
import { create, deleteUser, list, getInfoById, updateUser } from './controller/user.controller';
const router = express.Router()

//Post Method
router.post('/create', create)

//Get all Method
router.get('/getAll', list)

//Get by ID Method
router.get('/getOne/:id', getInfoById)

//Update by ID Method
router.patch('/update/:id', updateUser)

//Delete by ID Method
router.delete('/delete/:id', deleteUser)

export default router;

