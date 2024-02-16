import React, { useEffect, useState } from "react";

export const EditUserForm = ({ selectedItem, onSave }) => {
  const [editedUser, setEditedUser] = useState({
    id: selectedItem.id,
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (selectedItem) {
      setEditedUser(selectedItem);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    for (const [key, value] of Object.entries(editedUser)) {
      if (value !== "") {
        data[key] = value;
      }
    }
    const json = JSON.stringify(data);
    console.log(editedUser.id);

    try {
      const response = await fetch(
        `http://localhost:8080/users/${editedUser.id}`,
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
        Name:
        <input
          type="text"
          name="firstName"
          value={editedUser.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          name="lastName"
          value={editedUser.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={editedUser.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};
