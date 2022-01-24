import { Item } from "../../interfaces";
import { State, useItemsReducer } from "./items";

export const useTrendingItemsReducer = (initialState: State = []) => {
  const { items, setItems, setMoreItems } = useItemsReducer([]);
  return { items, setItems, setMoreItems };
};
