import { useEffect, useState, useContext } from 'react';
import { Stack, Pagination } from '@mantine/core';
import { SettingsContext } from '../../Context/settings';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
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
        <LayoutGroup>
          <Stack>
            <AnimatePresence mode='popLayout'>
              {displayList.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                >
                  <Todo
                    key={item.id}
                    item={item}
                    toggleComplete={toggleComplete}
                    deleteItem={deleteItem}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </Stack>
          <motion.div layout>
            <Pagination
              page={activePage}
              onChange={(val) => {
                setPage(val);
              }}
              total={
                userSettings.showCompletedTasks
                  ? Math.ceil(list.length / userSettings.itemsPerPage)
                  : Math.ceil(incomplete / userSettings.itemsPerPage)
              }
            />
          </motion.div>
        </LayoutGroup>
      </Stack>
    </>
  );
}
