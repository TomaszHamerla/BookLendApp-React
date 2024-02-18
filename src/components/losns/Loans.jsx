import React, { useEffect, useState } from "react";
import "./Loans.css";

export const Loans = () => {
  const [list, setList] = useState([]);
  const getLoans = async () => {
    const response = await fetch(
      "http://localhost:8080/loans/searchByLoanStatus?status=true",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const loans = await response.json();
    setList(loans);
  };

  useEffect(() => {
    getLoans();
  }, []);
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
        {list.map((l) => (
          <div key={l.loanId} className="dataTable">
            <div className="title">{l.lastName}</div>
            <div className="books">
              <div className="data">
                <div>{l.book.title}</div>
                <button>Return book</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="inputDiv">
        <input
          type="text"
          className="loansInput"
          placeholder="Searching by lastname"
        />
      </div>
    </div>
  );
};
