import React from "react";
import "./Users.css";
import { useState } from "react";
import { Books } from "../books/Books";
import { RenderList } from "../RenderList";

export const Users = () => {
  const list = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Alice", lastName: "Smith" },
    { id: 3, firstName: "Bob", lastName: "Johnson" },
    { id: 4, firstName: "Eva", lastName: "Williams" },
    { id: 5, firstName: "Charlie", lastName: "Brown" },
    { id: 6, firstName: "Grace", lastName: "Davis" },
    { id: 7, firstName: "Daniel", lastName: "Miller" },
    { id: 8, firstName: "Olivia", lastName: "Taylor" },
    { id: 9, firstName: "Michael", lastName: "Jones" },
    { id: 10, firstName: "Sophia", lastName: "Clark" },
    { id: 11, firstName: "Henry", lastName: "Moore" },
    { id: 12, firstName: "Emma", lastName: "Anderson" },
  ];

  const[searchPhrase,setSearchPhrase]=useState('')
  const handleSearchPhrase=(e)=>{
    setSearchPhrase(e.target.value)
  }
  return (
    <>
      <input
        type="text"
        className="input"
        placeholder="Searching by lastname"
        value={searchPhrase}
        onChange={handleSearchPhrase}
      />
      <RenderList list={list} searchPhrase={searchPhrase} title={'Users'}/>
    </>
  );
};
