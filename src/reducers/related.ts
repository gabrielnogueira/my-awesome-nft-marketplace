import { State, useItemsReducer } from "./items";

//just an abstraction using the items reducer but in a different context
export const useRelatedItemsReducer = (initialState: State = []) => {
  const { items, setItems, setMoreItems } = useItemsReducer([]);
  return { items, setItems, setMoreItems };
};
