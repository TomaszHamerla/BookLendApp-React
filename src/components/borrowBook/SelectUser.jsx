import React, { useEffect, useState } from "react";
import { SelectBook } from "./SelectBook";

export const SelectUser = () => {
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const toggleEdit = (user) => {
    setSelectedUser(user);
    console.log(user);
    setIsEditing(!isEditing);
  };

  const getUsers = async () => {
    const response = await fetch("http://localhost:8080/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const users = await response.json();
    setList(users);
  };

  const handleBorrow=()=>{
    setIsEditing(false)
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="container-books">
      <h2 className="header">Select user</h2>
      <table className="book-list">
        <thead>
          <tr>
            <th>Email</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
          {list.map((u) => (
            <tr key={u.id} className="book-item">
              <td>{u.email}</td>
              <td>{u.lastName}</td>
              <td>
                <button className="editbtn" onClick={() => toggleEdit(u)}>
                  Pick
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing && (
        <>
          <div className={`overlay ${isEditing ? "active" : ""}`}></div>
          <div className="edit-modal">
            <h2>Select book </h2>
            <SelectBook  selectedUser={selectedUser} handleBorrow={handleBorrow}/>
            <button onClick={() => setIsEditing(false)}>Close</button>
          </div>
        </>
      )}
    </div>
  );
};
