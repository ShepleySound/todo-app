import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { SettingsProvider } from './Context/settings';
import { AuthProvider } from './Context/auth';

import Root from './root.js';
import App from './Pages/app.js';
import Settings from './Pages/settings';
import AuthWrapper from './Components/auth-wrapper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: (
          <AuthWrapper>
            <App />
          </AuthWrapper>
        ),
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SettingsProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </SettingsProvider>
    </MantineProvider>
  </React.StrictMode>
);
