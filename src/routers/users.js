import { Router } from "express";
import { createUserController, deleteUserController, getAllUsersController, getUserByIdController, putUserController, patchUserController } from "../controllers/users.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validation.js";
import { createUserSchema, updateUserSchema } from "../validation/users.js";

const router = Router();

    //GET all users
    router.get('/users', ctrlWrapper(getAllUsersController));


    //GET a user by ID
    router.get("/users/:id", ctrlWrapper(getUserByIdController));

    //CREATE a user
    router.post("/users", validateBody(createUserSchema), ctrlWrapper(createUserController));

    //DELETE a user
    router.delete("/users/:id", ctrlWrapper(deleteUserController));

    //PUT a user
    router.put("/users/:id", validateBody(updateUserSchema), ctrlWrapper(putUserController));

    //PATCH a user
    router.patch("/users/:id", validateBody(updateUserSchema), ctrlWrapper(patchUserController));




export default router;

