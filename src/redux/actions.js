//----before-----

// import { createAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// export const addContact = createAction('contacts/add', data => {
//   return {
//     payload: {
//       ...data,
//       id: nanoid(),
//     },
//   };
// });

// export const deleteContact = createAction('contacts/delete');

// export const setFilter = createAction('filter/set');

//-----------before-before----------

// import { nanoid } from 'nanoid';

// import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './constants';

// export const addContact = payload => {
//   return {
//     type: ADD_CONTACT,
//     payload: {
//       id: nanoid(),
//       ...payload,
//     },
//   };
// };

// export const deleteContact = payload => {
//   return {
//     type: DELETE_CONTACT,
//     payload,
//   };
// };

// export const setFilter = payload => {
//   return {
//     type: SET_FILTER,
//     payload,
//   };
// };
