import { useState } from "react";
import { startItems } from "../lib/constants";

export default function ItemList({ items, deleteItem, toggle }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          deleteItem={deleteItem}
          item={item}
          key={item.name}
          toggle={toggle}
        />
      ))}
    </ul>
  );
}

function Item({ item, deleteItem, toggle }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => toggle(item.id)}
          type="checkbox"
          checked={item.packed}
        />
        {item.name}
      </label>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
