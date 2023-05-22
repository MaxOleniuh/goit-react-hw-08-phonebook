import { Button, Input, Title } from '@mantine/core';
import { IconAt, IconKey, IconUser } from '@tabler/icons-react';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Title order={1}>Registration Form</Title>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <Input
            icon={<IconUser />}
            placeholder="Your Name"
            type="text"
            name="name"
          />
        </label>
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
          Register
        </Button>
      </form>
    </>
  );
};