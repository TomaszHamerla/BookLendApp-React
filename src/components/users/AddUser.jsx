import React, { useState } from "react";
import "./AddUser.css";

export const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleBtnClick = async (e) => {
    e.preventDefault();
    const user = { firstName: firstName, lastName: lastName, email: email };
    const json = JSON.stringify(user);
    console.log(json);

    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });
    console.log(response);
    if (response.status === 201) {
      alert("User added");
    } else {
      alert("something went wrong");
    }
  };
  return (
    <div className="formContainer-user">
      <h2 className="header">Add user</h2>
      <div className="form-user">
        <form onSubmit={handleBtnClick}>
          <input
            type="text"
            className="input-form-user"
            placeholder="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="input-form-user"
            placeholder="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            className="input-form-user"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="addBookBtn-user" type="submit">
            Add user
          </button>
        </form>
      </div>
    </div>
  );
};
