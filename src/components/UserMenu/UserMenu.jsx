import { Button, Flex, Text } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/selectorsAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);

    return {
      isLoggedIn,
      isRefreshing,
      user,
    };
  };
  const { user } = useAuth();

  return (
    <Flex
      mih={100}
      gap="md"
      justify="space-around"
      align="center"
      direction="row"
      wrap="nowrap"
    >
      <Text sx={{ marginLeft: '24px' }}>Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Flex>
  );
};