import { useState, useContext } from 'react';
import { Header, Group, Button, Modal } from '@mantine/core';
import { Outlet, Link } from 'react-router-dom';
import LoginForm from './Components/login-form';
import { AuthContext } from './Context/auth';

export default function Root() {
  const { logout, loginData } = useContext(AuthContext);
  const [loginOpened, setLoginOpened] = useState(false);
  return (
    <>
      <Modal
        opened={loginOpened}
        onClose={() => setLoginOpened(false)}
        title='Login'
      >
        <LoginForm modalClose={() => setLoginOpened(false)} />
      </Modal>
      <Header
        p={8}
        sx={(theme) => ({
          backgroundColor: theme.colors.blue[6],
        })}
        mb={16}
      >
        <Group position='apart'>
          <Group>
            <Button component={Link} to={'/'} color='white'>
              Home
            </Button>
            <Button component={Link} to={'/settings'} color='white'>
              Settings
            </Button>
          </Group>
          {loginData.isLoggedIn ? (
            <Button color='teal' onClick={() => logout()}>
              Logout
            </Button>
          ) : (
            <Button color='teal' onClick={() => setLoginOpened(true)}>
              Login
            </Button>
          )}
        </Group>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
