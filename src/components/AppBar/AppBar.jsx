import { Header } from '@mantine/core';
import { AuthNav } from '../AuthNav/AutNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';

export const AppBar = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <Navigation />
      {loggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};