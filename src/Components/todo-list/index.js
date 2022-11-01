import { useEffect, useState, useContext } from 'react';
import { Stack, Pagination } from '@mantine/core';
import { SettingsContext } from '../../Context/settings';
import Todo from '../todo';

export default function TodoList({
  list,
  toggleComplete,
  deleteItem,
  incomplete,
}) {
  const settings = useContext(SettingsContext);
  const [listStart, setListStart] = useState(0);
  const [displayList, setDisplayList] = useState(list);
  const [activePage, setPage] = useState(1);

  useEffect(() => {
    setDisplayList(
      list
        .filter((item) => !item.complete)
        .slice(listStart, listStart + settings.displayCount)
    );
    setListStart(settings.displayCount * (activePage - 1));
  }, [list, listStart, activePage, settings.displayCount]);

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
          total={Math.ceil(incomplete / settings.displayCount)}
        />
      </Stack>
    </>
  );
}
