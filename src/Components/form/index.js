import { useState } from 'react';
import useForm from '../../hooks/use-form.js';
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
  Title,
} from '@mantine/core';

export default function TodoForm({ addItem }) {
  const [defaultValues] = useState({
    difficulty: 3,
  });
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  return (
    <Paper withBorder p='xs'>
      <form onSubmit={handleSubmit}>
        <Stack spacing='md'>
          <Title order={2}>Add To Do Item</Title>
          <TextInput
            data-testid='task-input'
            onChange={handleChange}
            placeholder='Task details...'
            label='Task'
            withAsterisk
            name='task'
          />

          <Slider
            mb={16}
            data-testid='slider-input'
            name='difficulty'
            label='Difficulty'
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
              { value: 0, label: '0' },
              { value: 1, label: 1 },
              { value: 2, label: 2 },
              { value: 3, label: 3 },
              { value: 4, label: 4 },
            ]}
          />

          <Button data-testid='form-submit-button' type='submit'>
            Add Item
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
