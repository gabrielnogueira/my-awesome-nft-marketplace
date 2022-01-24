import { useItemsReducer } from "./items";

export const useRelatedItemsReducer = (initialState = []) => {
    const {items, setItems, setMoreItems} = useItemsReducer([]);
    return { items, setItems, setMoreItems };
  };
  