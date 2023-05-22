import { Button, Input, Title } from '@mantine/core';
import { IconAt, IconKey } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Title order={1}>LogIn Form</Title>
      <form onSubmit={handleSubmit} autoComplete="on">
        <label>
          Email
          <Input
            icon={<IconAt />}
            placeholder="Your Email"
            type="email"
            name="email"
          />
        </label>
        <label>
          Password
          <Input
            icon={<IconKey />}
            placeholder="Your Password"
            type="password"
            name="password"
          />
        </label>
        <Button type="submit" sx={{ marginTop: '12px' }}>
          Log In
        </Button>
      </form>
    </>
  );
};