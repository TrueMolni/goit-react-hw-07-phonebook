import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactsList from './ContactsList';
import Phonebook from './Phonebook';
import Filter from './Filter';

import {
  fetchAddContact,
  fetchDeleteContact,
  fetchAllContacts,
} from '../redux/contacts/contacts-operations';

import { setFilter } from '../redux/filter/filter-slice';
import { getFilter } from '../redux/filter/filter-selectors';
import { getFilteredContacts } from '../redux/contacts/contacts-selectors';

const App = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const isContacts = Boolean(filteredContacts.length);

  return (
    <div>
      <h1>Phonebook</h1>
      <Phonebook onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} handleChange={handleFilter} />

      {isContacts ? (
        <ContactsList
          contacts={filteredContacts}
          removeContact={handleDeleteContact}
        />
      ) : (
        <p>No contacts in phonebook</p>
      )}
    </div>
  );
};

export default App;
