import React, { useState, useEffect } from "react";
import { BooksStatus } from "./books/BooksStatus";

export const RenderList = ({ list, searchPhrase, title }) => {
  const initialPageSize = 5;
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const calculateTotalPages = () => {
      const filteredList = searchPhrase
        ? title === "Books"
          ? list.filter((b) =>
              b.title.toLowerCase().includes(searchPhrase.toLowerCase())
            )
          : list.filter((u) =>
              u.lastName.toLowerCase().includes(searchPhrase.toLowerCase())
            )
        : list;

      const totalListSize = filteredList.length;
      const calculatedTotalPages = Math.ceil(totalListSize / pageSize);
      setTotalPages(calculatedTotalPages);
    };

    calculateTotalPages();
  }, [searchPhrase, list, pageSize]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const filterList = searchPhrase
    ? title === "Books"
      ? list.filter((b) =>
          b.title.toLowerCase().includes(searchPhrase.toLowerCase())
        )
      : list.filter((u) =>
          u.lastName.toLowerCase().includes(searchPhrase.toLowerCase())
        )
    : list;

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  let currentList;
  const [loanStatus, setLoanStatus] = useState(`-`);
  const handleLoanStatus = (status) => {
    setLoanStatus(status);
  };
  if (title === "Books") {
    const filteredBooksByStatus =
      loanStatus !== "-"
        ? filterList.filter((b) => b.available === (loanStatus === "Available"))
        : filterList;
    currentList = filteredBooksByStatus.slice(startIndex, endIndex);
  } else {
    currentList = filterList.slice(startIndex, endIndex);
  }

  return (
    <>
      <div className="container-books">
        {filterList.length > 0 ? (
          <h2 className="header">{title}</h2>
        ) : (
          <div className="header">No matchers</div>
        )}
        <table className="book-list">
          <thead>
            <tr>
              {title === "Books" ?<th>Title</th>:<th>Firstname</th>}
              {title === "Books" ?<th>Author</th>:<th>Lastname</th>}
              {title === "Books" ? <th>Status</th> : <></>}
            </tr>
          </thead>
          <tbody>
            {title === "Books"
              ? currentList.map((b) => (
                  <tr key={b.id} className="book-item">
                    <td>{b.title}</td>
                    <td>{b.author}</td>
                    <td>{b.available ? "Available" : "Unavailable"}</td>
                  </tr>
                ))
              : currentList.map((u) => (
                  <tr key={u.id} className="book-item">
                    <td>{`Firstname: ${u.firstName}`}</td>
                    <td>{`Lastname: ${u.lastName}`}</td>
                  </tr>
                ))}
          </tbody>
        </table>

        {(totalPages > 1 || pageSize >= filterList.length) && (
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
      {title === "Books" && (
        <BooksStatus
          loanStatus={loanStatus}
          handleLoanStatus={handleLoanStatus}
        />
      )}
    </>
  );
};
