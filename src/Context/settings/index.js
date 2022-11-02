import { createContext, useState } from 'react';

const SettingsContext = createContext(null);

function SettingsProvider({ children }) {
  const [userSettings, setUserSettings] = useState({
    showCompletedTasks: false,
    itemsPerPage: 5,
    sortKeyword: 'difficulty',
  });
  const [displayCompleted, setDisplayCompleted] = useState(false);
  const [displayCount, setDisplayCount] = useState(5);
  const [defaultSortField, setDefaultSortField] = useState('difficulty');

  return (
    <SettingsContext.Provider
      value={{
        userSettings,
        setUserSettings,
        displayCompleted,
        setDisplayCompleted,
        displayCount,
        setDisplayCount,
        defaultSortField,
        setDefaultSortField,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsContext, SettingsProvider };
