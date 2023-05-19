import { addContact, deleteContact, fetchContacts } from './operations';
const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};
const slice = createSlice({
  name: 'toolkit',
  initialState,
  extraReducers: {
    [fetchContacts.fulfilled](state, { payload }) {
      state.contacts.items = payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, { payload }) {
      if (state.contacts.items.name !== payload.name)
        state.contacts.items.push(payload);
      state.contacts.isLoading = false;
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, { payload }) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== payload
      );
      state.contacts.isLoading = false;
    },
    [deleteContact.rejected]: handleRejected,
  },
});
export default slice.reducer;
export const { changeFilter } = slice.actions;
