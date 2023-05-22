import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import { MyGlobalStyles } from 'Global.Styled';
import { SimpleGrid } from '@mantine/core';
import { Layout } from 'components/Layout/Layout';
import Login from 'pages/Login';
import Register from 'pages/Register';
import MainLayout from 'pages/MainLayout.jsx/MainLayout';
import { RestrictedRoute } from 'RestrictedRoute';
import { PrivateRoute } from 'PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <MyGlobalStyles />
      <SimpleGrid cols={1} spacing="lg">
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
             <Route
                  path="register"
                  element={
                    <RestrictedRoute
                      redirectTo="/contacts"
                      component={<Register />}
                    />
                  }
                />
                <Route
                  path="login"
                  element={
                    <RestrictedRoute
                      redirectTo="/contacts"
                      component={<Login />}
                    />
                  }
                />
                <Route
                  path="contacts"
                  element={
                    <PrivateRoute
                      redirectTo="/login"
                      component={<MainLayout />}
                    />
                  }
                />
            </Route>
        </Routes>
       </SimpleGrid>
      </>
    );
  }