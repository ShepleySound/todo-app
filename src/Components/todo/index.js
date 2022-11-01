import React, { useEffect, useState } from 'react';
import {
  Button,
  TextInput,
  Slider,
  NumberInput,
  Stack,
  Container,
  Text,
  Box,
  Badge,
  Card,
  Divider,
  Group,
  Grid,
  Center,
  CloseButton,
} from '@mantine/core';

const Todo = ({ item, toggleComplete, deleteItem }) => {
  return (
    <Card
      shadow='sm'
      radius='sm'
      withBorder
      onClick={() => toggleComplete(item.id)}
    >
      <Card.Section withBorder inheritPadding py='xs'>
        <Group position='apart'>
          <Group>
            <Badge>{item.complete.toString()}</Badge>
            <Text span>{item.assignee}</Text>
          </Group>
          <Group>
            <CloseButton
              title='Delete Task'
              onClick={(e) => {
                e.stopPropagation();
                deleteItem(item.id);
              }}
            ></CloseButton>
          </Group>
        </Group>
      </Card.Section>
      {/* <Divider my='sm' /> */}
      <Card.Section inheritPadding py='xs'>
        <Text lineClamp={10}>{item.text}</Text>
      </Card.Section>
      <Card.Section p='xs'>
        <Group position='right'>
          <Text size='xs'>Difficulty: {item.difficulty}</Text>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default Todo;
