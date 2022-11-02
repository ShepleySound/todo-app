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
  const { userSettings } = useContext(SettingsContext);
  const [listStart, setListStart] = useState(0);
  const [displayList, setDisplayList] = useState(list);
  const [activePage, setPage] = useState(1);

  useEffect(() => {
    setDisplayList(
      list
        .filter((item) => userSettings.showCompletedTasks || !item.complete)
        .slice(listStart, listStart + userSettings.itemsPerPage)
    );
    setListStart(userSettings.itemsPerPage * (activePage - 1));
  }, [
    list,
    listStart,
    activePage,
    userSettings.itemsPerPage,
    userSettings.showCompletedTasks,
  ]);

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
          total={
            userSettings.showCompletedTasks
              ? Math.ceil(list.length / userSettings.itemsPerPage)
              : Math.ceil(incomplete / userSettings.itemsPerPage)
          }
        />
      </Stack>
    </>
  );
}
