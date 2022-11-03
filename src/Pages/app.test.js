import { render, screen } from '@testing-library/react';
import App from './app';
import AuthWrapper from '../Components/auth-wrapper';
import { AuthContext, AuthProvider } from '../Context/auth';
import { SettingsProvider } from '../Context/settings';

test('Renders the main application area', () => {
  render(
    <SettingsProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </SettingsProvider>
  );
  let statusHeader = screen.getByTestId('status-header');
  const statusText = screen.getByTestId('status-header-title');
  expect(statusHeader).toBeInTheDocument();
  expect(statusText).toHaveTextContent('Todo List: 0 items pending');
});
