import { UsersCollection } from "../db/models/users.js";

export const getUsersById = async (id) => {
const user = await UsersCollection.findOne({ id: Number(id) });
return user;
};

export const getAllUsers = async () => {
const users = await UsersCollection.find();
return users;
};

