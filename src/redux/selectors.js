export const getAllContacts = store => store.contacts;
export const getFilter = ({ filter }) => filter;
export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) return contacts;
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(normalizedFilter) ||
      number.includes(normalizedFilter)
    );
  });
  return result;
};
