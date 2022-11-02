import { useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import {
  Button,
  TextInput,
  Switch,
  NumberInput,
  Stack,
  Paper,
  Title,
} from '@mantine/core';

import { SettingsContext } from '../../Context/settings';

export default function SettingsForm() {
  const { userSettings, setUserSettings } = useContext(SettingsContext);

  // const [values] = useState({
  //   showCompletedTasks: userSettings.showCompletedTasks,
  //   itemsPerPage: userSettings.itemsPerPage,
  //   sortKeyword: userSettings.sortKeyword,
  // });

  function updateSettings(settings) {
    setUserSettings((userSettings) => {
      return { ...userSettings, ...settings };
    });
  }

  const { handleChange, handleSubmit, handleToggle } = useForm(
    updateSettings,
    userSettings
  );

  return (
    <Paper withBorder p='xs'>
      <form onSubmit={handleSubmit}>
        <Stack spacing='md'>
          <Title order={2}>Update Settings</Title>

          <Switch
            name='showCompletedTasks'
            label='Show Completed Tasks'
            onChange={handleToggle}
            defaultChecked={userSettings.showCompletedTasks}
          />

          <NumberInput
            label='Items Per Page'
            data-testid='slider-input'
            onChange={(val) => {
              const e = {
                target: {
                  value: val,
                  name: 'itemsPerPage',
                },
              };
              handleChange(e);
            }}
            defaultValue={userSettings.itemsPerPage}
            min={1}
            max={20}
          />

          <TextInput
            name='sortKeyword'
            defaultValue={userSettings.sortKeyword}
            label='Sort Keyword'
            data-testid='sort-input'
            onChange={handleChange}
            placeholder='Item details...'
          />

          <Button data-testid='form-submit-button' type='submit'>
            Update Settings
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
