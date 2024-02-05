import React, { useEffect } from "react";
import "./Users.css";
import { useState } from "react";
import { Books } from "../books/Books";
import { RenderList } from "../RenderList";

export const Users = () => {
  const [list, setList] = useState([]);
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

  useEffect(() => {
    getUsers();
  }, []);

  const [searchPhrase, setSearchPhrase] = useState("");
  const handleSearchPhrase = (e) => {
    setSearchPhrase(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        className="input"
        placeholder="Searching by lastname"
        value={searchPhrase}
        onChange={handleSearchPhrase}
      />
      <RenderList list={list} searchPhrase={searchPhrase} title={"Users"} />
    </>
  );
};
