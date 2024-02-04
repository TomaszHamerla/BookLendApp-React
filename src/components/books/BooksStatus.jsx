import { useState } from "react";
import React from "react";

export const BooksStatus = ({ loanStatus, handleLoanStatus }) => {
  return (
    <div className="availableStatus-container">
      <div className="availableStatus">
        <span className="availableStatus-info">Search available status: </span>
        <select
          className="availableStatus-select"
          onChange={(e) => handleLoanStatus(e.target.value)}
          value={loanStatus}
        >
          <option>-</option>
          <option>Available</option>
          <option>Unavailable</option>
        </select>
      </div>
    </div>
  );
};
