import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6454e398f803f34576340577.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const addContact = createAsyncThunk('contacts/add', async data => {
  try {
    const response = await axios.post('/contacts', data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async contactId => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (e) {
      console.log(e);
    }
  }
);
