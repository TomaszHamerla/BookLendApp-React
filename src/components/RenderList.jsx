import React, { useState, useEffect } from "react";
import { BooksStatus } from "./books/BooksStatus";
import { EditBookForm } from "./books/EditBookForm";
import "./books/EditBookForm.css";
import { Books } from "./books/Books";

export const RenderList = ({ list, searchPhrase, title, getList }) => {
  const initialPageSize = 5;
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleEditModal = (item) => {
    setSelectedItem(item);
    console.log(item);
    setIsEditing(!isEditing);
  };

  const handleDeleteBtn = async (item) => {
    setSelectedItem(item);
    if (confirm(`Do you want to delete a ${item.title}`)) {
      console.log(item);
      await fetch(`http://localhost:8080/books/${item.id}`, {
        method: "DELETE",
      });
      getList();
    }
  };

  const handleSave = (editedItem) => {
    console.log("Saved:", editedItem);
    setIsEditing(false);
    if (title === "Books") {
      getList();
    }
  };

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
      <div className={`container-books`}>
        {filterList.length > 0 ? (
          <h2 className="header">{title}</h2>
        ) : (
          <div className="header">No matchers</div>
        )}
        <table className="book-list">
          <thead>
            <tr>
              {title === "Books" ? <th>Title</th> : <th>Email</th>}
              {title === "Books" ? <th>Author</th> : <th>Lastname</th>}
              {title === "Books" ? <th>Status</th> : <th>Number of books</th>}
            </tr>
          </thead>
          <tbody>
            {title === "Books"
              ? currentList.map((b) => (
                  <tr key={b.id} className="book-item">
                    <td>{b.title}</td>
                    <td>{b.author}</td>
                    <td>{b.available ? "Available" : "Unavailable"}</td>
                    <td>
                      <button
                        className="editbtn"
                        onClick={() => toggleEditModal(b)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="deletebtn"
                        onClick={() => handleDeleteBtn(b)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : currentList.map((u) => (
                  <tr key={u.id} className="book-item">
                    <td>{u.email}</td>
                    <td>{u.lastName}</td>
                    <td>{u.books.length}</td>
                  </tr>
                ))}
          </tbody>
        </table>
        {isEditing && title === "Books" && (
          <>
            <div className={`overlay ${isEditing ? "active" : ""}`}></div>
            <div className="edit-modal">
              <h2>Edit book</h2>
              <EditBookForm selectedItem={selectedItem} onSave={handleSave} />
              <button onClick={() => setIsEditing(false)}>Close</button>
            </div>
          </>
        )}

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
      {title === "Books" && !isEditing && (
        <BooksStatus
          loanStatus={loanStatus}
          handleLoanStatus={handleLoanStatus}
        />
      )}
    </>
  );
};
