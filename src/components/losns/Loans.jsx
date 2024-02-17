import React from "react";
import "./Loans.css";

export const Loans = () => {
  return (
    <div>
      <div className="header">
        <h2>Loans</h2>
      </div>
      <div className="loanTable">
        <div className="titleTable">
          <div>
            <h2>Last name</h2>
          </div>
          <div>
            <h2>Books</h2>
          </div>
        </div>
        <div className="dataTable">
          <div className="title">Tomasz</div>
          <div className="books">
            <div className="data">
              <div>Harry Potter 1</div>
              <button>Return book</button>
            </div>
          </div>
        </div>
        <div className="dataTable">
          <div className="title">Tomasz</div>
          <div className="books">
            <div className="data">
              <div>Harry Potter 1</div>
              <button>Return book</button>
            </div>
            <div className="data">
              <div>Harry Potter 1</div>
              <button>Return book</button>
            </div>
            <div className="data">
              <div>Harry Potter 1</div>
              <button>Return book</button>
            </div>
          </div>
        </div>
        <div className="dataTable">
          <div className="title">Tomasz</div>
          <div className="books">
            <div className="data">
              <div>Harry Potter 1</div>
              <button>Return book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
