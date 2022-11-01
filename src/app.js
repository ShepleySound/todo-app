import { useState, useContext } from 'react';
import Header from './Components/header';
import Todo from './Components/todo';

import SettingsProvider from './Context/settings';

export default function App() {
  return (
    <SettingsProvider>
      <Header />
      <Todo />
    </SettingsProvider>
  );
}
