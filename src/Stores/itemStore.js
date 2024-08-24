import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";
export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        };
        set((state) => ({ items: [...state.items, newItem] }));
      },
      toggleItem: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                packed: !item.packed,
              };
            }
            return item;
          });
          return { items: newItems };
        });
      },
      deleteItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          return { items: newItems };
        });
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      reset: () => {
        set(() => ({ items: initialItems }));
      },
      handleMarkAll: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return {
              ...item,
              packed: true,
            };
          });
          return { items: newItems };
        });
      },
      handleUnMarkAll: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return {
              ...item,
              packed: false,
            };
          });
          return { items: newItems };
        });
      },
    }),
    { name: "items" }
  )
);
