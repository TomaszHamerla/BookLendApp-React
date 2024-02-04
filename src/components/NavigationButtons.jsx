import "./NavigationButtons.css";
import React from "react";
import { AddBook } from "./books/AddBook";

export const NavigationButtons = (props) => {
  const { handleActivePage, refreshPage, activePage } = props;
  const handleButtonClick = (page) => {
    handleActivePage(page);
    refreshPage();
  };

  return (
    <div>
      {activePage !== "AddBook" && (
        <button className="navBtn" onClick={() => handleButtonClick("AddBook")}>
          Add book
        </button>
      )}
      {activePage !== "Users" && (
        <button
          className="navBtn"
          onClick={() => handleButtonClick("Users")}
        >
          Users
        </button>
      )}
      {activePage !== "0" && (
        <button className="navBtn" onClick={() => handleButtonClick("0")}>
          Books
        </button>
      )}
    </div>
  );
};
