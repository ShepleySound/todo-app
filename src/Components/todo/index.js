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

const Todo = ({ item, toggleComplete }) => {
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
            <CloseButton></CloseButton>
          </Group>
        </Group>
      </Card.Section>
      {/* <Divider my='sm' /> */}
      <Card.Section inheritPadding py='sm'>
        <Text lineClamp={10}>{item.text}</Text>
      </Card.Section>
      <Card.Section withBorder inheritPadding>
        <Group position='right'>
          <Text size='xs'>Difficulty: {item.difficulty}</Text>
        </Group>
      </Card.Section>
      {/* <Grid gutter='sm'>
        <Grid.Col span={12} style={{ minHeight: 80 }}>
          <Box>
            <Text lineClamp={3}>{item.text}</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={12}>
          <Group position='right'>
            <Text size='xs'>Difficulty: {item.difficulty}</Text>
          </Group>
        </Grid.Col>
      </Grid> */}
    </Card>
  );
};

export default Todo;
