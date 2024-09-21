import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Paginition = ({ currentPage, totalPages, onPageChange }) => {
  // Səhifə düymələri yaratmaq üçün məntiq
  const pageNumbers = [];
  for (let i = 1; i <= totalPages && i <= 5; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="custom-pagination">
      <Pagination.First 
        className="custom-pagination-item" 
        onClick={() => onPageChange(1)} 
        disabled={currentPage === 1} 
      />
      <Pagination.Prev 
        className="custom-pagination-item" 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1} 
      />
      
      {pageNumbers.map((page) => (
        <Pagination.Item
          key={page}
          className="custom-pagination-item"
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Pagination.Item>
      ))}
      
      <Pagination.Next 
        className="custom-pagination-item" 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages} 
      />
      <Pagination.Last 
        className="custom-pagination-item" 
        onClick={() => onPageChange(totalPages)} 
        disabled={currentPage === totalPages} 
      />
    </Pagination>
  );
};

export default Paginition;
