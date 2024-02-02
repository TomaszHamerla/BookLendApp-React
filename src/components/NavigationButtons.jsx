import React from "react";

export const NavigationButtons = ({
  handleActivePage,
  activePage,
  refreshPage,
}) => {
  const handleButtonClick = (page) => {
    handleActivePage(page);
    refreshPage();
  };

  return (
    <div>
      {activePage !== 'AddBook' ? (
        <>
          <button onClick={() => handleButtonClick('AddBook' )}>
            Add book
          </button>
        </>
      ) : (
        <></>
      )}
      {activePage !== 'Users' ? (
        <>
          <button onClick={() => handleButtonClick('Users')}>Users</button>
        </>
      ) : (
        <></>
      )}
      {activePage !== '0' ? (
        <>
          <button onClick={() => handleButtonClick('0')}>Books</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
