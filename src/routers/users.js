import { Router } from "express";
import { createUserController, deleteUserController, getAllUsersController, getUserByIdController, putUserController } from "../controllers/users.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

    //GET all users
    router.get('/users', ctrlWrapper(getAllUsersController));


    //GET a user by ID
    router.get("/users/:id", ctrlWrapper(getUserByIdController));

    //CREATE a user
    router.post("/users", ctrlWrapper(createUserController));

    //DELETE a user
    router.delete("/users/:id", ctrlWrapper(deleteUserController));

    //PUT a user
    router.put("/users/:id", ctrlWrapper(putUserController));



export default router;

