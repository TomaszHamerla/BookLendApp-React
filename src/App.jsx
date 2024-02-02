import "./App.css";
import { NavigationButtons } from "./components/NavigationButtons";
import { Books } from "./components/books/Books";
import { useState } from "react";

function App() {
  const [searchPhrase, setSearchPhrase] = useState('');

  const handleSearchChange = (e) => {
    setSearchPhrase(e.target.value);
  };

  const [activePage, setActivePage] = useState('0');

  const handleActivePage = (page) => {
    setActivePage(page);
  };
  const refreshPage=()=>{
    setActivePage(prevPgae=>prevPgae)
  }

  return (
    <div className="container">
      <div className="buttons-container">
        <NavigationButtons handleActivePage={handleActivePage} activePage={activePage} refreshPage={refreshPage}/>
      </div>
      {activePage === "0" ? (
        <>
          <input
            type='text'
            className='input'
            placeholder='Searching phrase'
            value={searchPhrase}
            onChange={handleSearchChange}
          />
          <Books searchPhrase={searchPhrase} />
        </>
      ) : (
        <>{activePage}</>
      )}
    </div>
  );
}

export default App;
