import { Router } from "express";
import { getAllUsersController, getUserByIdController } from "../controllers/users.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

    //GET all users
    router.get('/users', ctrlWrapper(getAllUsersController));


    //GET a user by ID
    router.get("/users/:id", ctrlWrapper(getUserByIdController));






export default router;

