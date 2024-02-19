import React, { useEffect, useState } from "react";

export const SelectBook = ({ selectedUser, handleBorrow }) => {
  const [books, setBooks] = useState([]);
  const user = selectedUser.id;
  const getBooks = async () => {
    const response = await fetch("http://localhost:8080/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const books = await response.json();
    setBooks(books);
  };

  const borrowBook = async (bookId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/loans/${user}/${bookId}`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("An error occurred while saving changes.");
      }
    } catch (error) {
      console.error(error);
    }
    alert("The book has been borrowed!");
    handleBorrow();
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div className="loanTable">
      <div className="titleTable">
        <div>
          <h2>Title</h2>
        </div>
        <div>
          <h2>Author</h2>
        </div>
      </div>
      {books.map(
        (b) =>
          b.available && (
            <div key={b.id} className="dataTable">
              <div className="title">{b.title}</div>
              <div className="books">
                <div className="data">
                  <div>{b.author}</div>
                  <button onClick={() => borrowBook(b.id)}>Pick</button>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};
