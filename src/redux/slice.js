import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const slice = createSlice({
  name: 'myStore',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        store.contacts.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact: (store, { payload }) => {
      const result = store.contacts.filter(item => item.id !== payload);
      return { ...store, contacts: result };
    },
    setFilter: (store, { payload }) => {
      return { ...store, filter: payload };
    },
  },
});

export const { addContact, deleteContact, setFilter } = slice.actions;
export default slice.reducer;
