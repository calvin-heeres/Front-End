import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Simplify page numbers to always show 1, 2, 3, etc. based on totalPages
  // For simplicity matching the image, just generate up to 3 pages + prev/next
  const pageNumbers = [];
  const maxVisiblePages = 3; // Corresponds to the image showing 1, 2, 3

  for (let i = 1; i <= Math.min(totalPages, maxVisiblePages); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="inline-flex items-center text-sm space-x-1">
        {/* Previous Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-8 h-8 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </li>

        {/* Page Numbers */}
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`flex items-center justify-center w-8 h-8 leading-tight border border-gray-300 rounded-md ${currentPage === number ? 'bg-red-600 text-white border-red-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {number}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center w-8 h-8 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination; 