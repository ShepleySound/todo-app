import { useState, useContext, useEffect } from 'react';
import StatusHeader from './Components/status-header';
import TodoList from './Components/todo-list';
import TodoForm from './Components/form';

import { v4 as uuid } from 'uuid';

import { SettingsProvider } from './Context/settings';
import { Container, Grid } from '@mantine/core';

export default function App() {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState(0);

  function addItem({ ...item }) {
    const newId = uuid();
    item.id = newId;
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    console.log(id);
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily.
    // disable code used to avoid linter warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <SettingsProvider>
      <Container size='md'>
        <Grid>
          <Grid.Col span={12}>
            <StatusHeader incomplete={incomplete} />
          </Grid.Col>
          <Grid.Col span={4}>
            <TodoForm addItem={addItem} />
          </Grid.Col>
          <Grid.Col span={8}>
            <TodoList
              list={list}
              incomplete={incomplete}
              toggleComplete={toggleComplete}
              deleteItem={deleteItem}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </SettingsProvider>
  );
}
