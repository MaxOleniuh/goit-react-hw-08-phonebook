import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import { MyGlobalStyles } from 'Global.Styled';
import { SimpleGrid } from '@mantine/core';
import { Layout } from 'components/Layout/Layout';
import Login from 'pages/Login';
import Register from 'pages/Register';
import MainLayout from 'pages/MainLayout.jsx/MainLayout';
import { RestrictedRoute } from 'RestrictedRoute';
import { PrivateRoute } from 'PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';

export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  return isRefreshing ? <b>Loading...</b> : (
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
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </SimpleGrid>
      
      </>
    );
  }