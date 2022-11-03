import { useContext } from 'react';
import { Text, Badge, Card, Group, CloseButton } from '@mantine/core';

import { AuthContext } from '../../Context/auth';

const Todo = ({ item, toggleComplete, deleteItem }) => {
  const { hasPermission } = useContext(AuthContext);
  return (
    <Card
      shadow='sm'
      radius='sm'
      withBorder
      onClick={() => {
        if (hasPermission('update')) {
          toggleComplete(item.id);
        } else console.log('Must have update permission.');
      }}
    >
      <Card.Section withBorder inheritPadding py='xs'>
        <Group position='apart'>
          <Group>
            {item.complete ? (
              <Badge size='md' variant='filled' color='green'>
                complete
              </Badge>
            ) : (
              <Badge size='md' variant='light' color='orange'>
                pending
              </Badge>
            )}
            <Text span>{item.assignee}</Text>
          </Group>
          <Group>
            <CloseButton
              title='Delete Task'
              onClick={(e) => {
                e.stopPropagation();
                if (hasPermission('delete')) {
                  deleteItem(item.id);
                } else console.log('Must have delete permission.');
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
