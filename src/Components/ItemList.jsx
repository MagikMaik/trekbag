import { useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";

export default function ItemList({ items, deleteItem, toggle }) {
  const sortingOptions = [
    { value: "default", label: "Sort by default" },
    { value: "packed", label: "Sort by packed" },
    { value: "unpacked", label: "Sort by unpacked" },
  ];
  const [SortyBy, setSortBy] = useState("default");
  const sortedItems = [...items].sort((a, b) => {
    if (SortyBy === "packed") {
      return b.packed - a.packed;
    }
    if (SortyBy === "unpacked") {
      return a.packed - b.packed;
    }
    return;
  });
  return (
    <ul>
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}
      {sortedItems.map((item) => (
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
