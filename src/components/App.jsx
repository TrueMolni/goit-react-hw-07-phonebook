import { useSelector, useDispatch } from 'react-redux';

import ContactsList from './ContactsList';
import Phonebook from './Phonebook';
import Filter from './Filter';
import { addContact, deleteContact, setFilter } from '../redux/slice';
import {
  getFilter,
  getFilteredContacts,
  getAllContacts,
} from '../redux/selectors';

const App = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const isDublicate = (name, number) => {
    const dublicateName = name.toLowerCase();
    const dublicateNumber = number;
    const result = contacts.find(({ name, number }) => {
      return name.toLowerCase() === dublicateName && number === dublicateNumber;
    });

    return Boolean(result);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDublicate(name, number)) {
      alert(`${name} with number: ${number} is already exist`);
      return false;
    }

    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
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
