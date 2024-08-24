import { useContext } from "react";
import { itemsContext } from "../contexts/ItemsContextProvider";

export function useItemsContext() {
  const context = useContext(itemsContext);
  if (!context) {
    throw new Error(
      "useItemsContext must be used within a ItemsContextProvider"
    );
  }
  return context;
}
