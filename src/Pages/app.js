import { useState, useEffect, useContext, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

import { Container, Grid, Title } from '@mantine/core';

import StatusHeader from '../Components/status-header';
import TodoList from '../Components/todo-list';
import TodoForm from '../Components/form';
import AuthWrapper from '../Components/auth-wrapper';

import { AuthContext } from '../Context/auth';

export default function App() {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState(0);
  const { loginData } = useContext(AuthContext);

  async function apiRequest(method, route, data = null) {
    const response = await axios({
      url: route,
      method: method,
      baseURL: process.env.REACT_APP_TODO_API_URL,
      headers: {
        Authorization: `Bearer ${loginData.token}`,
      },
      data: data,
    });
    return response;
  }

  async function addItem({ ...item }) {
    await apiRequest('post', 'api/todos', {
      task: item.task || 'Default task',
      difficulty: item.difficulty,
      complete: false,
    });

    await getTodos();
  }

  async function deleteItem(id) {
    await apiRequest('delete', `api/todos/${id}`);
    await getTodos();
  }

  async function toggleComplete(id) {
    const todo = await apiRequest('get', `api/todos/${id}`);
    console.log(todo.data);
    await apiRequest('patch', `api/todos/${id}`, {
      complete: !todo.data.complete,
    });

    await getTodos();
  }

  const getTodos = useCallback(async () => {
    const response = await apiRequest('get', 'api/todos');
    setList(response.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTodos().catch(console.error);
  }, [getTodos]);

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily.
    // disable code used to avoid linter warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <Container size='lg'>
      <Grid>
        <Grid.Col span={12}>
          <StatusHeader>
            <Title order={3} data-testid='status-header-title' color='white'>
              Todo List: {incomplete} items pending
            </Title>
          </StatusHeader>
        </Grid.Col>
        <AuthWrapper capability='create'>
          <Grid.Col sm={12} md={4}>
            <TodoForm addItem={addItem} />
          </Grid.Col>
        </AuthWrapper>
        <Grid.Col sm={12} md={8}>
          <TodoList
            list={list}
            incomplete={incomplete}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
