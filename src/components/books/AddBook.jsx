import React, { useState } from "react";
import "./AddBook.css";

export const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleBtnClick = async (e) => {
    e.preventDefault();
    const book = { title: title, author: author };
    const json = JSON.stringify(book);
    console.log(json);

    const response = await fetch("http://localhost:8080/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });
    console.log(response);
    if (response.status === 201) {
      alert("Book added");
    } else {
      alert("something went wrong");
    }
  };
  return (
    <div className="formContainer">
      <h2 className="header">Add book</h2>
      <div className="form">
        <form onSubmit={handleBtnClick}>
          <input
            type="text"
            className="input-form"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="input-form"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button className="addBookBtn" type="submit">
            Add book
          </button>
        </form>
      </div>
    </div>
  );
};
