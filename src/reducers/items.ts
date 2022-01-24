import { useReducer } from "react";
import { Item } from "../../interfaces";

export type State = Item[];


//this reduce was created intended to handle app state in a better way
//the ideia is has isolated context states and use it on the app combined as needed
//it is not being used now, cause i decided to use providers and useState, since the sice effects are simple
//and app has no complex logic and complex state / state management.
//but start using it is a good optimization and a good practice 
enum ActionTypes {
  SET_ITEMS = "SET_ITEMS",
  SET_MORE_ITEMS = "SET_MORE_ITEMS",
  SET_SELECTED_ITEM = "SET_SELECTED_ITEM",
}

type PayloadType = Item[] | Item;

interface Action {
  type: ActionTypes;
  payload?: PayloadType;
}

type Reducer = (state: State, action: PayloadType) => State;

type ReducerActions = Partial<Record<ActionTypes, Reducer>>;

const actions: ReducerActions = {
  [ActionTypes.SET_ITEMS]: (_, payload: Item[]) => {
    return payload;
  },
  [ActionTypes.SET_MORE_ITEMS]: (state, payload: Item[]) => {
    return [...state, ...payload];
  },
  [ActionTypes.SET_SELECTED_ITEM]: (state, payload: Item) => {
    return [...state, payload];
  },
};

export const useItemsReducer = (initialState: State = []) => {
  const [items, dispatch] = useReducer((state: State, action: Action) => {
    let fn = actions[action.type];

    if (fn) {
      return fn(state, action.payload);
    }

    console.debug("[WARNING] Action without reducer:", action);

    return state;
  }, initialState);

  const setItems = (payload) => {
    dispatch({ type: ActionTypes.SET_ITEMS, payload });
  };
  const setMoreItems = (payload) => {
    dispatch({ type: ActionTypes.SET_MORE_ITEMS, payload });
  };
  const setSelecteditem = (payload) => {
    dispatch({ type: ActionTypes.SET_MORE_ITEMS, payload });
  };

  return { items, setItems, setMoreItems, setSelecteditem };
};
