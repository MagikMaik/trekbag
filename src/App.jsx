import BackGroundHeading from "./Components/BackGroundHeading";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ItemList from "./Components/ItemList";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";
import { startItems } from "./lib/constants";
function App() {
  const [items, setItems] = useState(startItems);

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
    const newItems =items.filter( item => item.id !== id);
  return setItems(newItems);}
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
  }
  const handleRemoveAllItems = () => {
    setItems([]);
  };
  const handleReset = () => {
    setItems(startItems);
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

  return (
    <>
      <BackGroundHeading />

      <main>
        <Header />
        <ItemList items={items} deleteItem={handleDeleteItem} toggle={handleToggleItem}/>
        <Sidebar
          onAddItems={handleAddItems}
          removeAll={handleRemoveAllItems}
          resetAll={handleReset}
          markAll={handleMarkAll}
          unMarkAll={handleUnMarkAll}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
