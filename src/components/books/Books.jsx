import React, { useState, useEffect } from "react";
import "./Books.css";
import { RenderList } from "../RenderList";

export const Books = ({ searchPhrase }) => {
  const list = [
    { id: 1, title: "book 1", status: true },
    { id: 2, title: "book 2", status: false },
    { id: 3, title: "book 3", status: true },
    { id: 4, title: "book 4", status: false },
    { id: 5, title: "book 5", status: true },
    { id: 6, title: "book 6", status: false },
    { id: 7, title: "book 7", status: true },
    { id: 8, title: "book 8", status: false },
    { id: 9, title: "book 9", status: true },
    { id: 10, title: "book 10", status: false },
    { id: 11, title: "book 11", status: true },
    { id: 12, title: "book 12", status: false },
  ];

  return (
    <>
      <RenderList list={list} searchPhrase={searchPhrase} title={"Books"} />
    </>
  );
};
