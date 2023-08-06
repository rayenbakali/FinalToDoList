import React, { useState } from "react";

export default function NewToDoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // setTodos([...todos, newItem]) This one won't work becauuse everytime it only gets the empty array todos and re do all over again
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">add</button>
    </form>
  );
}
