import { createContext } from 'react';
import useLocalStorage from '../../hooks/use-local-storage';

const SettingsContext = createContext(null);

function SettingsProvider({ children }) {
  // const [userSettings, setUserSettings] = useState({
  //   showCompletedTasks: false,
  //   itemsPerPage: 5,
  //   sortKeyword: 'difficulty',
  // });

  const [userSettings, setUserSettings] = useLocalStorage('userSettings', {
    showCompletedTasks: false,
    itemsPerPage: 5,
    sortKeyword: 'difficulty',
  });

  // useEffect(() => {}, [userSettings]);

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
