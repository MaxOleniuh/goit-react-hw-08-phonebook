import { createAsyncThunk } from '@reduxjs/toolkit';
import { backend } from '../auth/authOperations';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      console.log('123');
      const response = await backend.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (form, thunkAPI) => {
    console.log('FORM', form);
    try {
      const response = await backend.post('/contacts', { ...form });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/removeContact',
  async (userId, thunkAPI) => {
    try {
      const response = await backend.delete(`/contacts/${userId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (data, thunkAPI) => {
    try {
      const response = await backend.patch('/contacts', { ...data });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
