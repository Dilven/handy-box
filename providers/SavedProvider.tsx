import React, { useReducer, createContext } from 'react';
import { useNonNullableContext } from '../hooks/useNonNullableContext';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const OPEN_SAVED_ITEMS = 'OPEN_SAVED_ITEMS';

export type SavedItem = {
  id: string;
  [key: string]: any
};

type State<T extends SavedItem> = {
  isOpen: boolean;
  items: Record<string, T>
}

type AddItem = {
  type: typeof ADD_ITEM;
  item: SavedItem
};

type ClearItem = {
  type: typeof CLEAR_ITEMS;
};

type CloseItem = {
  type: typeof REMOVE_ITEM,
  id: string;
}

type OpenSaveItems = {
  type: typeof OPEN_SAVED_ITEMS,
}

type SavedActions = AddItem | ClearItem | CloseItem | OpenSaveItems;

const defaultInitState = { isOpen: false, items: {} };

const reducer = <T extends SavedItem>(state: State<T>, action: SavedActions) => {
  switch (action.type) {
    case OPEN_SAVED_ITEMS: {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }
    case ADD_ITEM: {
      return {
        ...state,
        items: {
          ...state.items,
          [action.item.id]: action.item,
        },
      };
    }
    case REMOVE_ITEM:
      return {
        ...state,
        items: Object.entries(state.items).reduce((items, [id, item]) => (id !== action.id ? { ...items, [id]: item } : items), {}),
      };
    case CLEAR_ITEMS:
      return { ...state, items: {} };
    default:
      return state;
  }
};

type Props<T extends SavedItem> = {
  children: React.ReactNode;
  initState?: State<T>
}

type Actions = {
  addItem: (item: SavedItem) => void
  removeItem: (id: SavedItem['id']) => void
}

export const createSavedContext = < T extends SavedItem>() => {
  const StateContext = createContext<State<T> | undefined>(undefined);
  const DispatchContext = createContext<Actions | undefined>(undefined);

  const provider = ({ children, initState }: Props<T>) => {
    const [state, dispatch] = useReducer(reducer, initState || defaultInitState);
    const addItem = (item: SavedItem) => dispatch({ type: ADD_ITEM, item })
    const removeItem = (id: SavedItem['id']) => dispatch({ type: REMOVE_ITEM, id });

    const actions = {
      addItem, removeItem
    }
    return (
      <DispatchContext.Provider value={actions}>
        <StateContext.Provider value={state}>
          {children}
        </StateContext.Provider>
      </DispatchContext.Provider>
    );
  };

  const useState = () => useNonNullableContext(StateContext);
  const useDispatch = () => useNonNullableContext(DispatchContext);

  return [provider, useState, useDispatch] as const
}