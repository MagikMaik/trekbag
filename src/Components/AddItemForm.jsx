import React, { useRef } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItems }) {
  const [itemText, setItemText] = React.useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    setItemText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemText) {
      alert("Please enter an item");
      inputRef.current.focus();
      return;
    }
    
    onAddItems(itemText);
    setItemText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        value={itemText}
        onChange={handleChange}
        autoFocus
      />
      <Button text="Add item to list" />
    </form>
  );
}
