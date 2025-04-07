import { SORT_ORDER } from "../constants/constants.js";

const parseSortOrder = (sortOrder) => {
    const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
    if (isKnownOrder) return sortOrder;
    return SORT_ORDER.ASC;
  };


  const parseSortBy = (sortBy) => {
    const keysOfUser = [
      'id',
      'name',
        'email',
        'phone',
      'createdAt',
      'updatedAt',
    ];

    if (keysOfUser.includes(sortBy)) {
      return sortBy;
    }

    return 'id';
  };


  export const parseSortParams = (query) => {
    const {sortOrder, sortBy} = query;
    const parsedSortOrder = parseSortOrder(sortOrder);
    const parsedSortBy = parseSortBy(sortBy);

    return {
        sortBy: parsedSortBy,
        sortOrder: parsedSortOrder,
    };


  };
