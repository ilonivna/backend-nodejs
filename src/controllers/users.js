import {
  createUser,
  deleteUser,
  getAllUsers,
  getUsersById,
  updateUser,
} from '../services/users.js';
import createHttpError from 'http-errors';

export const getAllUsersController = async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json({
    message: 'Successfully fetched all users from DB',
    data: users,
  });
};

export const getUserByIdController = async (req, res) => {
  const { id } = req.params;
  const user = await getUsersById(id);

  if (!user) {
    throw createHttpError(404, 'User not found, really sorry...');
  }

  res.status(200).json({
    message: `User found with id ${id}! Congrats!`,
    data: user,
  });
};

export const createUserController = async (req, res) => {
  const user = createUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a user!',
    data: user,
  });
};

export const deleteUserController = async (req, res, next) => {
  const { id } = req.params;
  const user = await deleteUser(id);

  if (!user) {
    next(createHttpError(404, 'User not found!..Oops..!'));
    return;
  }

  res.status(200).json({
    message: `User deleted with id ${id}! Congrats!`,
    data: user,
  });
};

export const putUserController = async (req, res, next) => {
  const { id } = req.params;
  const user = await updateUser(id, req.body, {
    upsert: true,
  });

  if (!user) {
    next(createHttpError(404, 'User not found'));
    return;
  }

  const status = user.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: user.isNew
      ? 'Successfully created a user!'
      : 'Successfully updated a user!',
    data: user,
  });
};

export const patchUserController = async (req, res, next) => {
  const { id } = req.params;
  const user = await updateUser(id, req.body);

  if (!user) {
    next(createHttpError(404, 'User not found'));
    return;
  }

  res.json({
    status: 200,
    message: 'Successfully patched a user!',
    data: user,
  });
};
