import { UsersCollection } from '../db/models/users.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/constants.js';

export const getUsersById = async (id) => {
  const user = await UsersCollection.findOne({ id: Number(id) });
  return user;
};

export const getAllUsers = async ({ page, perPage,   sortOrder = SORT_ORDER.ASC,
  sortBy = 'id' }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;


  const usersQuery = UsersCollection.find();
  const usersCount = await UsersCollection.find()
    .merge(usersQuery)
    .countDocuments();
  const users = await usersQuery.skip(skip).limit(limit).sort({ [sortBy]: sortOrder }).exec();
  const paginationData = calculatePaginationData(usersCount, perPage, page);

  return { data: users, ...paginationData };
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
  const res = await UsersCollection.findOneAndUpdate(
    { id: Number(id) },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!res || !res.value) return null;

  return {
    user: res.value,
    isNew: Boolean(res?.lastErrorObject?.upserted),
  };
};
