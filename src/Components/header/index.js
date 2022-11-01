import { Container, Title } from '@mantine/core';

export default function Header(props) {
  return (
    <Container
      data-testid='todo-header'
      p={16}
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[8],
      })}
    >
      <Title order={3} width={100} data-testid='todo-h1' color='white'>
        Todo List: {props.incomplete} items pending
      </Title>
    </Container>
  );
}
