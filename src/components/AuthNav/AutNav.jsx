import { Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <Text
        component={NavLink}
        variant="link"
        to="register"
        fz="xl"
        fw={700}
        color="primary"
        sx={{ marginRight: '12px', marginLeft: '12px' }}
      >
        Register
      </Text>
      <Text component={NavLink} variant="link" to="login" fz="xl" fw={700}>
        LogIn
      </Text>
    </>
  );
};