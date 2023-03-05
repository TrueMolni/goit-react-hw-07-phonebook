import reducer from './slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;

// -------before-----

// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, setFilter } from './actions';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const initialStore = {
//   contacts: [],
//   filter: '',
// };

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const reducer = createReducer(
//   { ...initialStore },
//   {
//     [addContact]: (store, { payload }) => {
//       const newContacts = [...store.contacts, payload];
//       return { ...store, contacts: newContacts };
//     },
// [deleteContact]: (store, { payload }) => {
//   const result = store.contacts.filter(item => item.id !== payload);
//   return { ...store, contacts: result };
// },

// [setFilter]: (store, { payload }) => {
//   return { ...store, filter: payload };
// },
//   }
// );

// const persistedReducer = persistReducer(persistConfig, reducer);

// export default persistedReducer;

// -------before-before------

// import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './constants';

// // const someBooks = [
// //   { id: 1, name: 'Adam', number: '988765' },
// //   { id: 2, name: 'phill', number: '876485' },
// // ];

/*
const initialStore = {
  contacts: [],
  filter: '',
};

*/

// const reducer = (store = initialStore, { payload, type }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       const newContacts = [...store.contacts, payload];
//       return { ...store, contacts: newContacts };
//     case DELETE_CONTACT:
//       const result = store.contacts.filter(item => item.id !== payload);
//       return { ...store, contacts: result };
//     case SET_FILTER:
//       return { ...store, filter: payload };
//     default:
//       return store;
//   }
// };

// export default reducer;
