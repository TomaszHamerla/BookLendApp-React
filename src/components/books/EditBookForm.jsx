import React, { useState, useEffect } from "react";

export const EditBookForm = ({ selectedItem, onSave }) => {
  const [editedBook, setEditedBook] = useState({
    id: selectedItem.id,
    title: "",
    author: "",
  });

  useEffect(() => {
    if (selectedItem) {
      setEditedBook(selectedItem);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    for (const [key, value] of Object.entries(editedBook)) {
      if (value !== "") {
        data[key] = value;
      }
    }
    const json = JSON.stringify(data);
    console.log(editedBook.id);

    try {
      const response = await fetch(
        `http://localhost:8080/books/${editedBook.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: json,
        }
      );

      if (!response.ok) {
        throw new Error("An error occurred while saving changes.");
      }
    } catch (error) {
      console.error(error);
    }
    onSave(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={editedBook.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          name="author"
          value={editedBook.author}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};
