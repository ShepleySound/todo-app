import { Header, Group, Button, Anchor } from '@mantine/core';
import { Outlet, Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <Header
        p={8}
        sx={(theme) => ({
          backgroundColor: theme.colors.blue[6],
        })}
        mb={16}
      >
        <Group>
          <Button component={Link} to={'/'} color='white'>
            Home
          </Button>
          <Button component={Link} to={'/settings'} color='white'>
            Settings
          </Button>
        </Group>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
