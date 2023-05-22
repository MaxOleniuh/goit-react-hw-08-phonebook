import Loader from '../../components/Loader/Loader';
import Form from '../../components/Form/Form';
import List from '../../components/List/List';
import Filter from '../../components/Filter/Filter';
import { SimpleGrid, Text, Title } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const items = useSelector(getContacts);
  const { isLoading } = useSelector(getIsLoading);
    const filter = useSelector(state => state.filter);
  const filteredContacts = () => items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <>
        {isLoading && <Loader />}
        <SimpleGrid cols={1} spacing="md">
          <Title fw={900} fz={48} data-aos="zoom-in">Phonebook</Title>
          <Form />
          <Title fw={700} fz={42} data-aos="zoom-in">Contacts</Title>
          {items.length > 1 && <Text fw={700}>There are {items.length} contacts in the Phonebook.</Text>}
          {items.length === 1 && <Text fw={700}>There is 1 contact in the Phonebook.</Text>}
          {items.length === 0 && <Text fw={700}>There are no contacts in the Phonebook.</Text>}
          <Filter />
          <List contacts={filteredContacts()} />
        </SimpleGrid> 
      </>
      
    )
}
export default MainLayout;