import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";

import { useItemsStore } from "../Stores/itemStore";

export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const handleDeleteItem = useItemsStore((state) => state.deleteItem);
  const handleToggleItem = useItemsStore((state) => state.toggleItem);
  const sortingOptions = [
    { value: "default", label: "Sort by default" },
    { value: "packed", label: "Sort by packed" },
    { value: "unpacked", label: "Sort by unpacked" },
  ];
  const [SortyBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (SortyBy === "packed") {
          return b.packed - a.packed;
        }
        if (SortyBy === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, SortyBy]
  );
  return (
    <ul className="item-list">
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
          deleteItem={handleDeleteItem}
          item={item}
          key={item.name}
          toggle={handleToggleItem}
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
