import { useState, useContext, useEffect } from 'react';
import useForm from '../../hooks/use-form';
import { LoginContext } from '../../Context/auth';
import { Stack, TextInput, PasswordInput, Button } from '@mantine/core';

export default function LoginForm({ modalClose }) {
  const { login, logout, loginData } = useContext(LoginContext);
  const [defaultValues] = useState({
    username: null,
    password: null,
  });
  const { handleChange, handleSubmit } = useForm(submitLogin, defaultValues);

  function submitLogin(e) {
    login(e.username, e.password);
  }

  useEffect(() => {
    if (loginData.isLoggedIn) {
      modalClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginData.isLoggedIn]);

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextInput
          placeholder='Username'
          name='username'
          label='Username'
          onChange={handleChange}
        />
        <PasswordInput
          placeholder='Password'
          name='password'
          label='Password'
          onChange={handleChange}
        />
        <Button type='submit'>Login</Button>
      </Stack>
    </form>
  );
}
