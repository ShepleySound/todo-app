import { useState, useEffect } from 'react';
import { Container, Grid, Title } from '@mantine/core';
import StatusHeader from '../Components/status-header';
import SettingsForm from '../Components/settings-form';

export default function Settings() {
  return (
    <Container size='md'>
      <Grid>
        <Grid.Col span={12}>
          <StatusHeader>
            <Title
              order={3}
              width={100}
              data-testid='status-header-title'
              color='white'
            >
              Settings
            </Title>
          </StatusHeader>
        </Grid.Col>
        <Grid.Col span={4}>
          <SettingsForm />
        </Grid.Col>
        <Grid.Col span={8}>
          <Container></Container>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
