import React from 'react';

const PagingButton = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const delta = 2;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        pages.push(
          <button
            key={i}
            className={`px-[0.75rem] py-[0.25rem] mx-[0.25rem] rounded-md ${
              i === currentPage
                ? 'text-white bg-main dark:bg-darkPrimary'
                : 'hover:text-white hover:bg-primary dark:hover:bg-darkSecond'
            }`}
            onClick={() => handlePageClick(i)}>
            {i}
          </button>
        );
      } else if (
        (i === currentPage - delta - 1 || i === currentPage + delta + 1) &&
        !pages.includes('...')
      ) {
        pages.push(
          <span key={`dots-${i}`} className="px-2">
            ...
          </span>
        );
      }
    }
    return pages;
  };

  return (
    <div className=" text-[1.5rem] select-none">
      <button
        className="px-3 py-1 rounded disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}>
        &laquo; Prev
      </button>
      {renderPageNumbers()}
      <button
        className="px-3 py-1 rounded disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}>
        Next &raquo;
      </button>
    </div>
  );
};

export default PagingButton;
