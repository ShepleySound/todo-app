import { useState } from 'react';
import useForm from '../../hooks/form.js';
import {
  Button,
  TextInput,
  Slider,
  NumberInput,
  Stack,
  Container,
  Text,
  Box,
  Paper,
} from '@mantine/core';

export default function TodoForm({ addItem }) {
  const [defaultValues] = useState({
    difficulty: 3,
  });
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  return (
    <Paper withBorder p='xs'>
      <form onSubmit={handleSubmit}>
        <h2>Add To Do Item</h2>
        <TextInput
          onChange={handleChange}
          placeholder='Item details...'
          label='Task'
          withAsterisk
          name='text'
        />

        <TextInput
          name='assignee'
          onChange={handleChange}
          placeholder='Assignee name...'
          label='Assignee'
          withAsterisk
        />

        <Slider
          name='difficulty'
          onChangeEnd={(val) => {
            const e = {
              target: {
                value: val,
                name: 'difficulty',
              },
            };
            handleChange(e);
          }}
          defaultValue={defaultValues.difficulty}
          min={0}
          max={4}
          marks={[
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
          ]}
        />

        <NumberInput
          name='difficulty'
          // Custom onChange callback because Mantine components only return a value rather than a full event.
          // This is just a stop-gap for a better solution, hopefully.
          onChange={(val) => {
            const e = {
              target: {
                value: val,
                name: 'difficulty',
              },
            };
            handleChange(e);
          }}
          defaultValue={defaultValues.difficulty}
          label='difficulty'
        />

        <Button type='submit'>Add Item</Button>
      </form>
    </Paper>
  );
}
