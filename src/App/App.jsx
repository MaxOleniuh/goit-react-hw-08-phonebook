import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Routes, Route } from 'react-router-dom';
import MainLayout from 'components/MainLayout.jsx/MainLayout';
import Home from 'Home/Home';
import { MyGlobalStyles } from 'Global.Styled';
import { MantineProvider, SimpleGrid } from '@mantine/core';
import { Layout } from 'Layout';

export const App = () => {
  const dispatch = useDispatch();
  const [isAuth] = useState(false);
  const [colorScheme, setColorScheme] = useState('dark');

  useEffect(() => {
      dispatch(fetchContacts());
  }, [dispatch]);

    const changeTheme = () => {
      colorScheme === 'dark' ? setColorScheme('light') : setColorScheme('dark');
      console.log(colorScheme)
  };

  return (
    <>
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{ colorScheme: colorScheme }}
      />
      <MyGlobalStyles />
      <SimpleGrid cols={1} spacing="lg">
         {isAuth ? <Routes>
        <Route path='/phonebook' element={<MainLayout />} />
      </Routes> :
          <Routes>
             <Route path="/" element={<Layout />} />
              <Route index element={<Home />} />
        </Routes>}
       </SimpleGrid>
      </>
    );
  }