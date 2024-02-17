import { useState } from "react";
import "./App.css";
import { NavigationButtons } from "./components/NavigationButtons";
import { AddBook } from "./components/books/AddBook";
import { Books } from "./components/books/Books";
import { Loans } from "./components/losns/Loans";
import { AddUser } from "./components/users/AddUser";
import { Users } from "./components/users/Users";

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
          handleActivePage={(page) => setActivePage(page)}
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
      {activePage === "AddUser" && <AddUser />}
      {activePage === "Loans" && <Loans />}
    </div>
  );
}

export default App;
