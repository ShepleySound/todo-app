import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Todo from './index';
import { AuthProvider } from '../../Context/auth';

describe('Todo Component Tests', () => {
  const mockItem = {
    id: 12345,
    complete: false,
    assignee: 'test user',
    text: 'test task',
    difficulty: 3,
  };
  test('Render a task', () => {
    render(
      <AuthProvider>
        <Todo item={mockItem} />
      </AuthProvider>
    );

    // let header = screen.getByTestId('todo-header');
    // let h1 = screen.getByTestId('todo-h1');

    // expect(header).toBeTruthy();
    // expect(header).toBeInTheDocument();
    // expect(h1).toHaveTextContent('To Do List: 0 items pending');
  });
});
