import { createContext, useState } from 'react';

const SettingsContext = createContext(null);

export default function SettingsProvider({ children }) {
  const [displayCompleted, setDisplayCompleted] = useState(true);
  const [displayCount, setDisplayCount] = useState(5);
  const [defaultSortField, setDefaultSortField] = useState('Difficulty');

  return (
    <SettingsContext.Provider
      value={{
        displayCompleted,
        displayCount,
        defaultSortField,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
