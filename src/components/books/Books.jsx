import React, { useState, useEffect } from "react";
import "./Books.css";

export const Books = ({ searchPhrase }) => {
  const initialPageSize = 5;
  const books = [
    { id: 1, title: "book 1" },
    { id: 2, title: "book 2" },
    { id: 3, title: "book 3" },
    { id: 4, title: "book 4" },
    { id: 5, title: "book 5" },
    { id: 6, title: "book 6" },
    { id: 7, title: "book 7" },
    { id: 8, title: "book 8" },
    { id: 9, title: "book 9" },
    { id: 10, title: "book 10" },
    { id: 11, title: "book 11" },
    { id: 12, title: "book 12" },
  ];

  const [pageSize, setPageSize] = useState(initialPageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const calculateTotalPages = () => {
      const filteredBooks = searchPhrase
        ? books.filter((b) =>
            b.title.toLowerCase().includes(searchPhrase.toLowerCase())
          )
        : books;

      const totalBooks = filteredBooks.length;
      const calculatedTotalPages = Math.ceil(totalBooks / pageSize);
      setTotalPages(calculatedTotalPages);
    };

    calculateTotalPages();
  }, [searchPhrase, books, pageSize]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const filterBooks = searchPhrase
    ? books.filter((b) =>
        b.title.toLowerCase().includes(searchPhrase.toLowerCase())
      )
    : books;

  const currentBooks = filterBooks.slice(startIndex, endIndex);

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="container-books">
        {filterBooks.length > 0 ? (
          <h2 className="header">Books</h2>
        ) : (
          <div className="header">No matchers</div>
        )}
        <ol className="book-list">
          {currentBooks.map((b) => (
            <li key={b.id} className="book-item">
              {b.title}
            </li>
          ))}
        </ol>
        {(totalPages > 1 || pageSize >= filterBooks.length) && (
          <div className="pagination">
            <button
              className="pagination-button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous Page
            </button>
            <span className="page-info">
              {" "}
              Page {currentPage} of {totalPages}{" "}
            </span>
            <button
              className="pagination-button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next Page
            </button>
            <span className="page-info"> | Page Size: </span>
            <select
              className="select-box"
              value={pageSize}
              onChange={(e) => handlePageSizeChange(parseInt(e.target.value))}
            >
              {[5, 10, 15].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div className="availableStatus-container">
        <div className="availableStatus">
          <span className="availableStatus-info">
            Search available status:{" "}
          </span>
          <select className="availableStatus-select">
            <option>-</option>
            <option>Available</option>
            <option>Unavailable</option>
          </select>
        </div>
      </div>
    </>
  );
};
