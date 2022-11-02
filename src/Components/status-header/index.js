import { Container, Title } from '@mantine/core';

export default function StatusHeader(props) {
  return (
    <Container
      data-testid='status-header'
      p={16}
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[8],
      })}
    >
      <Title
        order={3}
        width={100}
        data-testid='status-header-title'
        color='white'
      >
        Todo List: {props.incomplete} items pending
      </Title>
    </Container>
  );
}
