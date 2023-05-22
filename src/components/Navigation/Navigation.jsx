import { Navbar, Text } from '@mantine/core';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';

export const Navigation = () => {
  const loggedIn = (useSelector(selectIsLoggedIn));

  return (
    <Navbar
      sx={{
        alignItems: 'center',
        height: '100px',
        paddingTop: '12px',
        paddingBottom: '12px',
        flexDirection: 'row',
        gap: '24px',
      }}
    >
      <Text component={NavLink} variant="link" to="/" fz="xl" fw={700}>
        Home
      </Text>
      {loggedIn && (
        <Text component={NavLink} variant="link" to="contacts" fz="xl" fw={700}>
          Contacts
        </Text>
      )}
    </Navbar>
  );
};