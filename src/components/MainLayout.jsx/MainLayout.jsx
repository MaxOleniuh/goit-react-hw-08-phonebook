import Loader from '../Loader/Loader';
import Form from '../Form/Form';
import List from '../List/List';
import Filter from '../Filter/Filter';
import { SimpleGrid, Text, Title } from '@mantine/core';
import PhonebookWrapper from './MainLayout.styled';
import {UserMenu} from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
const MainLayout = () => {
    const { items, isLoading } = useSelector(getContacts);
    const filter = useSelector(state => state.filter);
    const filteredContacts = () => items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
         <PhonebookWrapper>
        <UserMenu />
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
      </PhonebookWrapper>
    )
}
export default MainLayout;