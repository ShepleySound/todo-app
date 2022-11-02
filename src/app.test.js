import { render, screen } from '@testing-library/react';
import App from './app';

test('renders learn react link', () => {
  render(<App />);
  let statusHeader = screen.getByTestId('status-header');
  const statusText = screen.getByTestId('status-header-title');
  expect(statusHeader).toBeInTheDocument();
  expect(statusText).toHaveTextContent('Todo List: 0 items pending');
});
