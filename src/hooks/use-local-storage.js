import { useState } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (err) {
      console.error(err);
      return defaultValue;
    }
  });

  const setValue = (value) => {
    try {
      // Allows for passing in a function and getting its return, or just passing in a value
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue];
}
