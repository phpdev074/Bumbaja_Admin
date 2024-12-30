import React, { useState, useEffect } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalUsers: number;
  limit: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalUsers,
  limit,
  onPageChange,
}) => {
  const startIndex = (currentPage - 1) * limit + 1;
  const endIndex = Math.min(currentPage * limit, totalUsers);

  return (
    <div className="flex justify-between items-center mt-4">
      {/* Showing range and total entries */}
      <div className="text-sm text-gray-700 dark:text-gray-300">
        Showing {startIndex} to {endIndex} of {totalUsers} entries
      </div>

      {/* Pagination Controls */}
      <div className="space-x-2">
        {/* Previous Button */}
        <button
          className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Next Button */}
        <button
          className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};



export default Pagination;
