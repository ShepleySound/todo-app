import { useEffect, useState } from 'react';
import { Stack, Pagination } from '@mantine/core';

import Todo from '../todo';

const perPage = 5;

export default function TodoList({ list, toggleComplete, deleteItem }) {
  const [listStart, setListStart] = useState(0);
  const [displayList, setDisplayList] = useState(list);
  const [activePage, setPage] = useState(1);

  useEffect(() => {
    setDisplayList(list.slice(listStart, listStart + perPage));
    setListStart(perPage * (activePage - 1));
  }, [list, listStart, activePage]);

  return (
    <>
      <Stack>
        {displayList.map((item) => (
          <Todo
            key={item.id}
            item={item}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
          />
        ))}
        <Pagination
          page={activePage}
          onChange={setPage}
          total={Math.ceil(list.length / perPage)}
        />
      </Stack>
    </>
  );
}
