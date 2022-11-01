import { createContext, useState } from 'react';

const SettingsContext = createContext(null);

function SettingsProvider({ children }) {
  const [displayCompleted, setDisplayCompleted] = useState(false);
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

export { SettingsContext, SettingsProvider };
