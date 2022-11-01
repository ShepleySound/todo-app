import { Box, Text } from '@mantine/core';

export default function Header(props) {
  return (
    <Box
      data-testid='todo-header'
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[7],
      })}
    >
      <Text data-testid='todo-h1' color='white'>
        Todo List: {props.incomplete} items pending
      </Text>
    </Box>
  );
}
