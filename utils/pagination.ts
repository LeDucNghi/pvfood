export const handlePaginate = (page: number, limit: number, list: any[]) => {
  //   const page = parseInt(req.query.page);
  //   const limit = parseInt(req.query.limit);
  const totalRows = list.length;
  const totalPages = Math.ceil(totalRows / limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const data: {
    page: number;
    limit: number;
    totalRows: number;
    totalPages: number;
  } = {
    page: 0,
    limit: 0,
    totalRows: 0,
    totalPages: 0,
  };
  var paginatedResults = null;

  //   data.pagination = {
  //     page,
  //     limit,
  //     totalRows,
  //     totalPages,
  //   };

  //   data.data = list.slice(startIndex, endIndex);

  paginatedResults = data;

  return paginatedResults;
};

const handleSubtotalPricePerProduct = (price: number, qty: number) => {
  return price * qty;
};
