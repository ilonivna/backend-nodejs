import { getAllUsers, getUsersById } from "../services/users.js";
import createHttpError from "http-errors";

export const getAllUsersController =
    async (req, res) => {
        const users = await getAllUsers();
        res.status(200).json({
          message: "Successfully fetched all users from DB",
          data: users,
        });
    };

export const getUserByIdController = async (req, res) => {
    const {id} = req.params;
    const user = await getUsersById(id);

    if (!user) {
       throw createHttpError(404, "User not found, really sorry...");

    }

    res.status(200).json({
      message: `User found with id ${id}! Congrats!`,
      data: user,
    });
};
