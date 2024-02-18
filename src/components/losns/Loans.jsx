import React, { useEffect, useState } from "react";
import "./Loans.css";

export const Loans = () => {
  const [list, setList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const handleSearchChange = (e) => {
    setSearchPhrase(e.target.value);
  };

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
  const getArchiveLoans = async () => {
    const response = await fetch(
      "http://localhost:8080/loans/searchByLoanStatus?status=false",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const archiveLoans = await response.json();
    setList(archiveLoans);
  };

  const filterList = searchPhrase
    ? list.filter((el) =>
        el.lastName.toLowerCase().includes(searchPhrase.toLowerCase())
      )
    : list;

  useEffect(() => {
    if (!isChecked) {
      getLoans();
    } else {
      getArchiveLoans();
    }
  }, [handleToggle,searchPhrase]);
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
        {filterList.map((l) => (
          <div key={l.loanId} className="dataTable">
            <div className="title">{l.lastName}</div>
            <div className="books">
              <div className="data">
                <div>{l.book.title}</div>
                {isChecked && <div>Loan date: {l.loanDate}</div>}
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
          onChange={handleSearchChange}
          value={searchPhrase}
        />
      </div>
      <div className="Archive">
        <label>
          <input type="checkbox" checked={isChecked} onChange={handleToggle} />
          <span> Show archived book borrowings</span>
        </label>
      </div>
    </div>
  );
};
