import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { AuthContext, AuthProvider } from '../Context/auth';
import LoginForm from '../Components/login-form';
import AuthWrapper from '../Components/auth-wrapper';

test('AuthProvider contains initial login state', () => {
  render(
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => {
          return (
            <>
              <div data-testid='isLoggedIn'>{`${auth.loginData.isLoggedIn}`}</div>
              <div data-testid='user'>{typeof auth.loginData.user}</div>
              <div data-testid='hasPermissionFunction'>
                {typeof auth.hasPermission}
              </div>
            </>
          );
        }}
      </AuthContext.Consumer>
    </AuthProvider>
  );

  expect(screen.getByTestId('isLoggedIn')).toHaveTextContent('false');
  expect(screen.getByTestId('user')).toHaveTextContent('object');
  expect(screen.getByTestId('hasPermissionFunction')).toHaveTextContent(
    'function'
  );
});

test('AuthWrapper prevents rendering when not signed in', () => {
  render(
    <AuthProvider>
      <AuthWrapper>
        <div data-testid='hiddenTest'>hidden test</div>
      </AuthWrapper>
      <div data-testid='visibleTest'>visible test</div>
    </AuthProvider>
  );

  expect(screen.queryByTestId('hiddenTest')).not.toBeInTheDocument();
  expect(screen.getByTestId('visibleTest')).toBeInTheDocument();
});

test('Login form authenticates user and changes Auth Context state', () => {
  const mockCloseModal = jest.fn();
  render(
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => {
          return (
            <>
              <LoginForm modalClose={mockCloseModal} />
              <div data-testid='isLoggedIn'>{`${auth.loginData.isLoggedIn}`}</div>
              <div data-testid='capabilities'>{`${auth.loginData.user.capabilities}`}</div>
            </>
          );
        }}
      </AuthContext.Consumer>
    </AuthProvider>
  );
  const usernameInput = screen.getByLabelText('Username');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByRole('button');
  const loginStatus = screen.getByTestId('isLoggedIn');
  const capabilities = screen.getByTestId('capabilities');

  expect(loginStatus).toHaveTextContent('false');
  expect(capabilities).toHaveTextContent('');

  userEvent.type(usernameInput, 'User');
  userEvent.type(passwordInput, 'user');
  userEvent.click(submitButton);

  expect(loginStatus).toHaveTextContent('true');
  expect(capabilities).toHaveTextContent('read');

  expect(mockCloseModal).toHaveBeenCalled();
});
