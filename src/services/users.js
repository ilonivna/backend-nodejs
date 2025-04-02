import { UsersCollection } from '../db/models/users.js';

export const getUsersById = async (id) => {
  const user = await UsersCollection.findOne({ id: Number(id) });
  return user;
};

export const getAllUsers = async () => {
  const users = await UsersCollection.find();
  return users;
};

export const createUser = async (payload) => {
  const user = UsersCollection.create(payload);
  return user;
};

export const deleteUser = async (id) => {
  const user = UsersCollection.findOneAndDelete({
    id: Number(id),
  });
  return user;
};

export const updateUser = async (id, payload, options = {}) => {
  const res = await UsersCollection.findOneAndUpdate({ id: Number(id)  }, payload, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });

  if (!res || !res.value) return null;

  return {
    user: res.value,
    isNew: Boolean(res?.lastErrorObject?.upserted),
  };
};
