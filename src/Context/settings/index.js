import { createContext, useState } from 'react';

const SettingsContext = createContext(null);

function SettingsProvider({ children }) {
  const [userSettings, setUserSettings] = useState({
    showCompletedTasks: false,
    itemsPerPage: 5,
    sortKeyword: 'difficulty',
  });

  return (
    <SettingsContext.Provider
      value={{
        userSettings,
        setUserSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsContext, SettingsProvider };
