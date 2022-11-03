import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TodoForm from './';

xtest('Displays a form for the user', () => {
  render(<TodoForm />);

  expect(screen.getByTestId('task-input')).toBeInTheDocument();
  expect(screen.getByTestId('assignee-input')).toBeInTheDocument();
  expect(screen.getByTestId('slider-input')).toBeInTheDocument();
  expect(screen.getByTestId('form-submit-button')).toBeInTheDocument();
});
