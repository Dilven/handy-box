import { useState } from "react";

type LocalStorageKeys = 'savedPlaces'

export const useLocalStorage = <T extends any>(key: LocalStorageKeys, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    // TODO 
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // console.log(error);
    }
  };
  return [storedValue, setValue] as const;
}