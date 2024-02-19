import React from "react";
import "./NavigationButtons.css";

export const NavigationButtons = (props) => {
  const { handleActivePage, refreshPage, activePage } = props;
  const handleButtonClick = (page) => {
    handleActivePage(page);
    refreshPage();
  };

  return (
    <div>
      {activePage !== "Users" && (
        <button className="navBtn" onClick={() => handleButtonClick("Users")}>
          Users
        </button>
      )}
      {activePage !== "AddUser" && (
        <button className="navBtn" onClick={() => handleButtonClick("AddUser")}>
          Add user
        </button>
      )}
      {activePage !== "AddBook" && (
        <button className="navBtn" onClick={() => handleButtonClick("AddBook")}>
          Add book
        </button>
      )}
      {activePage !== "0" && (
        <button className="navBtn" onClick={() => handleButtonClick("0")}>
          Books
        </button>
      )}
      {activePage !== "Loans" && (
        <button className="navBtn" onClick={() => handleButtonClick("Loans")}>
          Loans
        </button>
      )}
      {activePage !== "SelectUser" && (
        <button
          className="navBtn"
          onClick={() => handleButtonClick("SelectUser")}
        >
          Borrow Book
        </button>
      )}
    </div>
  );
};
