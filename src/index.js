import { MantineProvider, Header, Group, Text } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Header
        p={8}
        sx={(theme) => ({
          backgroundColor: theme.colors.blue[6],
        })}
      >
        <Group>
          <Text color='white'>Home</Text>
        </Group>
      </Header>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
