export const calculatePaginationData = (count, perPage, page) => {
const totalPages = Math.ceil(count / perPage);
const hasNextPage = Boolean(totalPages - page);
const hasPrevPage = Boolean(page !== 1);

return {
    page,
    perPage,
    totalPages,
    hasNextPage,
    hasPrevPage,
    totalItems: count,
};
};
