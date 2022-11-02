import { Header, Group, Text } from '@mantine/core';
import { Outlet } from 'react-router-dom';

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
          <Text color='white'>Home</Text>
        </Group>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
