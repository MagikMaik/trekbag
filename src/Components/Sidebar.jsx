import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemsStore } from "../Stores/itemStore";

export default function Sidebar() {
  const handleAddItems = useItemsStore((state) => state.addItem);
  return (
    <div className="sidebar">
      <AddItemForm onAddItems={handleAddItems} />
      <ButtonGroup />
    </div>
  );
}
