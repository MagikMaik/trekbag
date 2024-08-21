import React from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({onAddItems, removeAll, resetAll, markAll, unMarkAll}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItems={onAddItems}/>
      <ButtonGroup removeAll={removeAll} resetAll={resetAll} markAll={markAll} unMarkAll={unMarkAll}/>
    </div>
  );
}
