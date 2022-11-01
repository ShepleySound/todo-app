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
} from '@mantine/core';

const Todo = ({ item, toggleComplete }) => {
  return (
    <Card
      shadow='sm'
      radius='md'
      withBorder
      onClick={() => toggleComplete(item.id)}
    >
      <Badge>{item.complete.toString()}</Badge>
      <Text>{item.text}</Text>
      <Text>{item.assignee}</Text>
      <Text>Difficulty: {item.difficulty}</Text>
    </Card>
  );
};

export default Todo;
