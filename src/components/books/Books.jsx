import React, { useState, useEffect } from "react";
import "./Books.css";
import { RenderList } from "../RenderList";

export const Books = ({ searchPhrase }) => {
  const [list, setList] = useState([]);
  const getBooks = async () => {
    const response = await fetch("http://localhost:8080/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const books = await response.json();
    console.log(books);
    setList(books);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <RenderList list={list} searchPhrase={searchPhrase} title={"Books"} />
    </>
  );
};
