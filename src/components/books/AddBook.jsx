import React from "react";
import "./AddBook.css";

export const AddBook = ({ onNavigate }) => {
  return (
    <div className="formContainer">
      <h2 className="header">Add book</h2>
      <div className="form">
        <form action="">
          <input type="text" className="input-form" placeholder="Title" />
          <input type="text" className="input-form" placeholder="Author" />
          <button className="addBookBtn">Add book</button>
        </form>
      </div>
    </div>
  );
};
