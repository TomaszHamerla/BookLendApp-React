import "./App.css";
import { NavigationButtons } from "./components/NavigationButtons";
import { AddBook } from "./components/books/AddBook";
import { Books } from "./components/books/Books";
import { useState } from "react";
import {Users}from './components/Users'

function App() {
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleSearchChange = (e) => {
    setSearchPhrase(e.target.value);
  };

  const [activePage, setActivePage] = useState("0");

 
  const refreshPage = () => {
    setActivePage((prevPgae) => prevPgae);
  };

  return (
    <div className="container">
      <div className="buttons-container">
        <NavigationButtons
          handleActivePage={(page)=>setActivePage(page)}
          activePage={activePage}
          refreshPage={refreshPage}
        />
      </div>
      {activePage === "0" && (
        <>
          <input
            type="text"
            className="input"
            placeholder="Searching phrase"
            value={searchPhrase}
            onChange={handleSearchChange}
          />
          <Books searchPhrase={searchPhrase} />
        </>
      )}
      {activePage === "AddBook" && <AddBook />}
      {activePage === "Users" && <Users />}
    </div>
  );
}

export default App;
