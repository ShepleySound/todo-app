import { Container } from '@mantine/core';

export default function StatusHeader({ children }) {
  return (
    <Container
      data-testid='status-header'
      fluid
      p={16}
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[8],
      })}
    >
      {children}
    </Container>
  );
}
