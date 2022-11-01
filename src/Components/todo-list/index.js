import { Stack } from '@mantine/core';

import Todo from '../todo';

export default function TodoList({ list, toggleComplete, deleteItem }) {
  return (
    <>
      <Stack>
        {list.map((item) => (
          <Todo
            key={item.id}
            item={item}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
          />
        ))}
      </Stack>
    </>
  );
}
