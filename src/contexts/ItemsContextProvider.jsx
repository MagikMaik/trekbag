import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

export const itemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initialItems;
  });

  const handleAddItems = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    return setItems(newItems);
  };
  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          packed: !item.packed,
        };
      }
      return item;
    });
    setItems(newItems);
  };
  const handleRemoveAllItems = () => {
    setItems([]);
  };
  const handleReset = () => {
    setItems(initialItems);
  };

  const handleMarkAll = () => {
    const newItems = items.map((item) => {
      return {
        ...item,
        packed: true,
      };
    });
    setItems(newItems);
  };
  const handleUnMarkAll = () => {
    const newItems = items.map((item) => {
      return {
        ...item,
        packed: false,
      };
    });
    setItems(newItems);
  };
  const totalNumberOfItems = items.length;

  const itemsPacked = items.filter((item) => item.packed).length;

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <itemsContext.Provider
      value={{
        items,
        handleAddItems,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleReset,
        handleMarkAll,
        handleUnMarkAll,
        totalNumberOfItems,
        itemsPacked,
      }}
    >
      {children}
    </itemsContext.Provider>
  );
}
