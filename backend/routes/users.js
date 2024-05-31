import express from 'express';

import { updateUser,deleteUser,getSingleUser,getAllUser } from '../controllers/userController.js';

import {verifyAdmin, verifyUser} from "../utils/verifyToken.js";
const router = express.Router();

// update user
router.put("/:id",verifyUser,updateUser);

// delete user
router.delete("/:id",verifyUser,deleteUser);

// get single 
router.get("/:id",verifyUser, getSingleUser);

// get all
router.get("/",verifyAdmin, getAllUser);

export default router