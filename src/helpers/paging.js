export function paging(data, currentPage, pageSize) {
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  currentPage = Math.max(1, Math.min(currentPage, totalPages));

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);

  const items = data.slice(startIndex, endIndex);

  return {
    currentPage,
    totalPages,
    pageSize,
    totalItems,
    items,
  };
}
