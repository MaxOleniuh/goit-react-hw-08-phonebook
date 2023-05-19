import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import Loader from '../components/Loader/Loader';
import Form from '../components/Form/Form';
import List from '../components/List/List';
import Filter from '../components/Filter/Filter';
import { SimpleGrid, Text, Title } from '@mantine/core';
import AppStyled from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const { items, isLoading } = useSelector(getContacts);
  
  useEffect(() => {
      dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
      <AppStyled>
        <SimpleGrid cols={1} spacing="md">
        {isLoading && <Loader />}
        <Title fw={900} fz={62}>Phonebook</Title>
        <Form />
        <Title fw={700} fz={42}>Contacts</Title>
        {items.length > 1 && <Text fw={700}>There are {items.length} contacts in the Phonebook.</Text>}
        {items.length === 1 && <Text fw={700}>There is 1 contact in the Phonebook.</Text>}
        {items.length === 0 && <Text fw={700}>There are no contacts in the Phonebook.</Text>}
        <Filter />
          <List contacts={filteredContacts()} />
           </SimpleGrid>
      </AppStyled>
    );
  }